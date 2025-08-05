# TypeScript Teaching Course

Welcome to the TypeScript Teaching Course! This repository is designed to help you learn TypeScript from the ground up through practical examples and exercises.

## Course Overview

This course covers fundamental TypeScript concepts through hands-on examples:

1. **Basic Types** (`basics.ts`)

   - Number, String, Boolean
   - Array and Tuple types
   - Enum and Any types

2. **Custom Types** (`customType.ts`)

   - Type aliases
   - Interfaces
   - Union and Intersection types

3. **Function Types** (`functionTypes.ts`)

   - Function signatures
   - Optional and default parameters
   - Rest parameters
   - Function overloads

4. **Null & Undefined** (`null&Undefined.ts`)

   - Strict null checks
   - Optional chaining
   - Nullish coalescing

5. **Void Type** (`voidType.ts`)
   - Understanding void in functions
   - Differences between void and undefined
   - Usage in callbacks

## Setup Instructions

### Prerequisites

1. Install Node.js

   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. Install TypeScript

   ```bash
   npm install -g typescript
   tsc --version
   ```

### Project Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/shemajolivetgislain/typescript_teaching_course.git
   cd typescript_teaching_course
   ```

2. Initialize TypeScript configuration:

   ```bash
   tsc --init
   ```

## Working with Examples

### Compile and Run

Each TypeScript file can be run independently:

```bash
# Compile a specific file
tsc basics.ts

# Run the compiled JavaScript
node basics.js
```

### Watch Mode

For development, use TypeScript's watch mode:

```bash
# Watch a specific file
tsc basics.ts --watch

# Watch all files
tsc --watch
```

## Learning Path

1. Start with `basics.ts` to understand fundamental TypeScript types
2. Move to `customType.ts` to learn about custom type definitions
3. Explore `functionTypes.ts` for function-related type features
4. Study `null&Undefined.ts` for null safety features
5. Complete with `voidType.ts` for void type usage

## Best Practices

- Enable strict mode in TypeScript configuration
- Use explicit type annotations when type inference isn't clear
- Leverage TypeScript's type checking during development
- Use the `--noEmitOnError` flag to prevent generating JavaScript files when there are errors

## License

This project is licensed under the terms specified in the LICENSE file.
