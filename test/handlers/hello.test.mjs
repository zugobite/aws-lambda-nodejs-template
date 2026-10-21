import assert from 'node:assert/strict';
import test from 'node:test';

import { handler } from '../../src/handlers/hello.mjs';

test('returns a personalized greeting', async () => {
  const response = await handler(
    { queryStringParameters: { name: 'Lambda' } },
    { awsRequestId: 'test-request-id' },
  );

  assert.equal(response.statusCode, 200);
  assert.equal(response.headers['content-type'], 'application/json; charset=utf-8');
  assert.deepEqual(JSON.parse(response.body), {
    message: 'Hello, Lambda!',
    service: 'lambda-template',
    requestId: 'test-request-id',
  });
});

test('uses a default name', async () => {
  const response = await handler({});

  assert.equal(JSON.parse(response.body).message, 'Hello, world!');
});

test('returns 400 when the name is too long', async () => {
  const response = await handler({
    queryStringParameters: { name: 'a'.repeat(51) },
  });

  assert.equal(response.statusCode, 400);
  assert.deepEqual(JSON.parse(response.body), {
    error: 'Bad Request',
    message: 'The name query parameter must be 50 characters or fewer.',
  });
});
