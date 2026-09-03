-- reporting/api/schema.sql
CREATE TABLE IF NOT EXISTS sessions (
  id            SERIAL PRIMARY KEY,
  user_email    TEXT NOT NULL,
  product       TEXT NOT NULL CHECK (product IN (
                  'Fund Subscription', 'Data Room', 'IDM', 'Engagement Hub',
                  'Integration Hub', 'Investor Portal', 'Data Extraction',
                  'Unclassified'
                )),
  product_note  TEXT,
  feature       TEXT NOT NULL,
  status        TEXT NOT NULL CHECK (status IN ('success', 'verify_failed', 'render_failed')),
  error         TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_sessions_product ON sessions(product);
CREATE INDEX IF NOT EXISTS idx_sessions_created_at ON sessions(created_at DESC);
