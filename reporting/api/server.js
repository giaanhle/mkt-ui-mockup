// reporting/api/server.js
const express = require('express');
const session = require('express-session');
const path = require('node:path');
const fs = require('node:fs');
// Reference the db module directly (not destructured) so that test-time
// reassignment of db.<fn> (e.g. `db.listFeatures = async () => ...`) is
// honored — destructuring would capture the original function reference
// at require-time and ignore later reassignments.
const db = require('./db');
const { isValidProduct, isValidStatus } = db;

const app = express();
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'dev-only-secret-change-in-prod',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 8 }, // 8 hours
}));

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || null;

// ---- Unauthenticated reporting endpoints ----

app.post('/api/report', async (req, res) => {
  const { user_email, product, product_note, feature, status, error } = req.body || {};

  if (!user_email || !feature || !status) {
    return res.status(400).json({ error: 'user_email, feature, and status are required' });
  }
  if (!isValidProduct(product)) {
    return res.status(400).json({ error: `invalid product: ${product}` });
  }
  if (!isValidStatus(status)) {
    return res.status(400).json({ error: `invalid status: ${status}` });
  }
  if (product === 'Unclassified' && !product_note) {
    return res.status(400).json({ error: 'product_note is required when product is Unclassified' });
  }

  try {
    await db.insertSession({ user_email, product, product_note, feature, status, error });
    return res.status(204).end();
  } catch (e) {
    return res.status(500).json({ error: 'failed to record session' });
  }
});

app.get('/api/features', async (req, res) => {
  const { product } = req.query;
  if (!isValidProduct(product)) {
    return res.status(400).json({ error: `invalid product: ${product}` });
  }
  try {
    const features = await db.listFeatures(product);
    return res.status(200).json(features);
  } catch (e) {
    return res.status(500).json({ error: 'failed to list features' });
  }
});

// ---- Admin auth ----

function requireAdmin(req, res, next) {
  if (req.session && req.session.isAdmin) return next();
  return res.status(401).send('Unauthorized. POST credentials to /admin/login.');
}

app.post('/admin/login', express.urlencoded({ extended: false }), (req, res) => {
  if (ADMIN_PASSWORD && req.body.password === ADMIN_PASSWORD) {
    req.session.isAdmin = true;
    return res.redirect('/admin');
  }
  return res.status(401).send('Invalid password.');
});

app.get('/admin/login', (req, res) => {
  res.send(`<form method="POST" action="/admin/login">
    <input type="password" name="password" placeholder="Admin password" />
    <button type="submit">Log in</button>
  </form>`);
});

app.get('/admin', requireAdmin, async (req, res) => {
  const html = fs.readFileSync(path.join(__dirname, 'views', 'admin.html'), 'utf-8');
  res.status(200).send(html);
});

app.get('/admin/api/sessions', requireAdmin, async (req, res) => {
  const { product, email } = req.query;
  const rows = await db.listSessions({ product, email });
  res.status(200).json(rows);
});

app.get('/admin/api/product-counts', requireAdmin, async (req, res) => {
  const rows = await db.productCounts();
  res.status(200).json(rows);
});

module.exports = { app };

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`reporting-api listening on :${port}`));
}
