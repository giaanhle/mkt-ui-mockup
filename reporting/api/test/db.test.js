// reporting/api/test/db.test.js
const test = require('node:test');
const assert = require('node:assert');
const { isValidProduct, isValidStatus, FIXED_PRODUCTS } = require('../db');

test('isValidProduct accepts all 7 fixed names plus Unclassified', () => {
  for (const name of FIXED_PRODUCTS) {
    assert.strictEqual(isValidProduct(name), true);
  }
});

test('isValidProduct rejects an unknown product', () => {
  assert.strictEqual(isValidProduct('Not A Real Product'), false);
});

test('isValidStatus accepts the 3 known statuses', () => {
  assert.strictEqual(isValidStatus('success'), true);
  assert.strictEqual(isValidStatus('verify_failed'), true);
  assert.strictEqual(isValidStatus('render_failed'), true);
});

test('isValidStatus rejects an unknown status', () => {
  assert.strictEqual(isValidStatus('pending'), false);
});
