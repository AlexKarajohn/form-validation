# React Password Validation Form Library

Welcome to the Password Validation Form Library for React! This library offers a straightforward password entry component, designed specifically to meet the requirements of an assessment project.

## Why Use This Library?

In response to the needs of an assessment project, we developed this library to fulfill the following password entry criteria using React:

- Two input fields for user entry (ensuring both inputs match)
- Minimum password length of 6 characters
- At least 1 uppercase character
- At least 1 lowercase character
- At least 1 number
- At least 1 special character (!@#$%^&\*()\_-+={[}]|:;"'<,>.)
- Submit button triggering validation and presenting success or reasons for password entry failure

## Requirements

### Task:

1. Implement a password entry library in React.
2. Ensure validation based on specified criteria.
3. Display success or failure messages.

## Installation

To integrate this library into your project, follow these simple steps:

```bash
npm install akaragiannis-password-form-validation
```

## Usage

Import the component from the npm package

```typescript
import { PasswordForm } from "akaragiannis-password-form-validation";
```

In your functional component's return statement, include

```typescript
<PasswordForm />
```

This component does not accept any props as it is designed to be simple and easy to use.

## Examples

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Navigate to the `examples/simple-example` directory.
4. Start the development server using `npm run dev`.
5. Visit http://localhost:5173/ in your preferred browser.

## Development

If you are contributing to the development of this library, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Navigate to the `examples/simple-example` directory.
4. Start the development server using `npm run dev`.
5. Visit http://localhost:5173/ in your browser.

In your code, import the `PasswordForm` component from the local development version:

```typescript
import { PasswordForm } from "@form-validation/password";
```

## Releasing

We adhere to semantic versioning, and the release process is automated through 'semantic-release'.

## Missing Features

Some features are still in progress:

- Not in scope but would be beneficial: Trigger a callback function passed through props when validation fails or passes with proper validation state, message, and data.
- PR workflow checks (commit linting, running tests, prettier, lint, etc)
- Testing
