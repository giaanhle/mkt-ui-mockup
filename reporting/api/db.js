// reporting/api/db.js
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const FIXED_PRODUCTS = [
  'Fund Subscription', 'Data Room', 'IDM', 'Engagement Hub',
  'Integration Hub', 'Investor Portal', 'Data Extraction', 'Unclassified',
];

const STATUSES = ['success', 'verify_failed', 'render_failed'];

function isValidProduct(product) {
  return FIXED_PRODUCTS.includes(product);
}

function isValidStatus(status) {
  return STATUSES.includes(status);
}

async function insertSession({ user_email, product, product_note, feature, status, error }) {
  await pool.query(
    `INSERT INTO sessions (user_email, product, product_note, feature, status, error)
     VALUES ($1, $2, $3, $4, $5, $6)`,
    [user_email, product, product_note || null, feature, status, error || null]
  );
}

async function listFeatures(product) {
  const result = await pool.query(
    `SELECT DISTINCT feature FROM sessions WHERE product = $1 ORDER BY feature`,
    [product]
  );
  return result.rows.map((r) => r.feature);
}

async function listSessions({ product, email } = {}) {
  const conditions = [];
  const params = [];
  if (product) {
    params.push(product);
    conditions.push(`product = $${params.length}`);
  }
  if (email) {
    params.push(`%${email}%`);
    conditions.push(`user_email ILIKE $${params.length}`);
  }
  const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';
  const result = await pool.query(
    `SELECT id, user_email, product, product_note, feature, status, error, created_at
     FROM sessions ${where} ORDER BY created_at DESC LIMIT 200`,
    params
  );
  return result.rows;
}

async function productCounts() {
  const result = await pool.query(
    `SELECT product, COUNT(*)::int AS count FROM sessions GROUP BY product ORDER BY count DESC`
  );
  return result.rows;
}

module.exports = {
  pool,
  FIXED_PRODUCTS,
  STATUSES,
  isValidProduct,
  isValidStatus,
  insertSession,
  listFeatures,
  listSessions,
  productCounts,
};
