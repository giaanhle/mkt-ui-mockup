// reporting/api/test/server.test.js
const test = require('node:test');
const assert = require('node:assert');
const http = require('node:http');

// Use an in-memory fake for db.js so this test doesn't need real Postgres.
const db = require('../db');
const originalInsertSession = db.insertSession;
const insertedRows = [];
db.insertSession = async (row) => { insertedRows.push(row); };

const { app } = require('../server');

function request(server, method, path, body) {
  return new Promise((resolve, reject) => {
    const data = body ? JSON.stringify(body) : null;
    const req = http.request(
      { hostname: '127.0.0.1', port: server.address().port, path, method,
        headers: data ? { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) } : {} },
      (res) => {
        let raw = '';
        res.on('data', (chunk) => (raw += chunk));
        res.on('end', () => resolve({ status: res.statusCode, body: raw }));
      }
    );
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

test('POST /api/report inserts a valid session and returns 204', async () => {
  const server = app.listen(0);
  const res = await request(server, 'POST', '/api/report', {
    user_email: 'test@anduintransact.com',
    product: 'Fund Subscription',
    feature: 'AML/KYC',
    status: 'success',
  });
  assert.strictEqual(res.status, 204);
  assert.strictEqual(insertedRows.length, 1);
  assert.strictEqual(insertedRows[0].product, 'Fund Subscription');
  server.close();
});

test('POST /api/report rejects an invalid product with 400', async () => {
  const server = app.listen(0);
  const res = await request(server, 'POST', '/api/report', {
    user_email: 'test@anduintransact.com',
    product: 'Not A Real Product',
    feature: 'AML/KYC',
    status: 'success',
  });
  assert.strictEqual(res.status, 400);
  server.close();
});

test('POST /api/report rejects Unclassified without product_note with 400', async () => {
  const server = app.listen(0);
  const res = await request(server, 'POST', '/api/report', {
    user_email: 'test@anduintransact.com',
    product: 'Unclassified',
    feature: 'Something new',
    status: 'success',
  });
  assert.strictEqual(res.status, 400);
  server.close();
});

test('GET /api/features returns distinct feature names for a product', async () => {
  db.listFeatures = async (product) => (product === 'Fund Subscription' ? ['AML/KYC', 'Investor Data Prefill'] : []);
  const server = app.listen(0);
  const res = await request(server, 'GET', '/api/features?product=Fund%20Subscription');
  assert.strictEqual(res.status, 200);
  assert.deepStrictEqual(JSON.parse(res.body), ['AML/KYC', 'Investor Data Prefill']);
  server.close();
});

test('GET /admin without a session redirects or 401s', async () => {
  const server = app.listen(0);
  const res = await request(server, 'GET', '/admin');
  assert.strictEqual(res.status, 401);
  server.close();
});

// restore (must run after all tests actually execute, not at module-load
// time — `test()` only schedules tests, it doesn't run them synchronously,
// so a plain assignment here would restore the real insertSession before
// any test body runs)
test.after(() => {
  db.insertSession = originalInsertSession;
});
