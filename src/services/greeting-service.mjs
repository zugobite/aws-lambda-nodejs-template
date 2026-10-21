const MAX_NAME_LENGTH = 50;

export class InvalidNameError extends Error {}

export const createGreeting = (value) => {
  const name = value?.trim() || 'world';

  if (name.length > MAX_NAME_LENGTH) {
    throw new InvalidNameError(
      `The name query parameter must be ${MAX_NAME_LENGTH} characters or fewer.`,
    );
  }

  return `Hello, ${name}!`;
};
