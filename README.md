# AWS Lambda Node.js 24 template

A dependency-free, structured starter for an AWS Lambda function running on Node.js 24. It includes an HTTP API endpoint, an AWS SAM template, input validation, a sample event, and unit tests.

## Structure

```text
.
├── events/                    # Local invocation payloads
├── src/
│   ├── config/                # Environment configuration
│   ├── handlers/              # Lambda entry points
│   ├── lib/                   # Shared infrastructure helpers
│   └── services/              # Business logic
├── test/
│   ├── handlers/              # Handler tests
│   └── services/              # Business-logic tests
├── package.json
└── template.yaml              # AWS SAM infrastructure
```

## Requirements

- Node.js 24+
- AWS SAM CLI (for local invocation and deployment)
- AWS credentials configured for deployment

## Run the tests

```sh
npm test
```

## Invoke locally

```sh
npm run invoke
```

The sample request returns:

```json
{
  "message": "Hello, Lambda!",
  "service": "lambda-template",
  "requestId": "..."
}
```

To run the local HTTP API instead:

```sh
sam build
sam local start-api
curl 'http://127.0.0.1:3000/hello?name=Lambda'
```

## Deploy

```sh
npm run deploy
```

Follow the guided prompts on the first deployment. SAM stores the answers in `samconfig.toml` for later deployments.

## Customize

- Add Lambda entry points to `src/handlers/` and keep business logic in `src/services/`.
- Put reusable HTTP and infrastructure helpers in `src/lib/`.
- Read environment configuration through `src/config/environment.mjs`.
- Add environment variables, permissions, or event sources under `HelloFunction` in `template.yaml`.
- Keep the handler setting aligned with the exported function, for example `src/handlers/hello.handler`.
