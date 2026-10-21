const JSON_HEADERS = Object.freeze({
  'content-type': 'application/json; charset=utf-8',
});

export const jsonResponse = (statusCode, body) => ({
  statusCode,
  headers: JSON_HEADERS,
  body: JSON.stringify(body),
});

export const ok = (body) => jsonResponse(200, body);

export const badRequest = (message) =>
  jsonResponse(400, {
    error: 'Bad Request',
    message,
  });

export const internalServerError = () =>
  jsonResponse(500, {
    error: 'Internal Server Error',
    message: 'An unexpected error occurred.',
  });
