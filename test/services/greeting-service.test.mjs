import assert from 'node:assert/strict';
import test from 'node:test';

import {
  createGreeting,
  InvalidNameError,
} from '../../src/services/greeting-service.mjs';

test('creates and trims a greeting', () => {
  assert.equal(createGreeting('  Ada  '), 'Hello, Ada!');
});

test('rejects names longer than 50 characters', () => {
  assert.throws(() => createGreeting('a'.repeat(51)), InvalidNameError);
});
