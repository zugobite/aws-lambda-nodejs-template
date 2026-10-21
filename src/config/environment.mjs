const DEFAULT_SERVICE_NAME = 'lambda-template';

export const config = Object.freeze({
  serviceName: process.env.SERVICE_NAME || DEFAULT_SERVICE_NAME,
});
