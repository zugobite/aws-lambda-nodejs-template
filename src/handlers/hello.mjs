import { config } from '../config/environment.mjs';
import { badRequest, internalServerError, ok } from '../lib/http-response.mjs';
import { createGreeting, InvalidNameError } from '../services/greeting-service.mjs';

/**
 * HTTP API Lambda handler.
 *
 * @param {{ queryStringParameters?: { name?: string } }} event
 * @param {{ awsRequestId?: string } | undefined} context
 */
export const handler = async (event = {}, context) => {
  try {
    const message = createGreeting(event.queryStringParameters?.name);

    return ok({
      message,
      service: config.serviceName,
      requestId: context?.awsRequestId ?? null,
    });
  } catch (error) {
    if (error instanceof InvalidNameError) {
      return badRequest(error.message);
    }

    console.error('Unhandled error', { error, requestId: context?.awsRequestId });
    return internalServerError();
  }
};
