# Getting Started with React and TypeScript

TypeScript has become the de facto standard for building modern React applications. In this guide, we'll walk through setting up a new React project with TypeScript and explore best practices.

## Why TypeScript?

TypeScript adds static typing to JavaScript, which provides several benefits:

- **Better IDE support** with autocomplete and inline documentation
- **Catch errors early** during development instead of runtime
- **Easier refactoring** with confidence
- **Self-documenting code** through type definitions

## Setting Up Your Project

You can create a new React + TypeScript project using Vite:

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
```

## Type-Safe Components

Here's an example of a typed React component:

```typescript
interface UserCardProps {
  name: string;
  email: string;
  age?: number;
}

export function UserCard({ name, email, age }: UserCardProps) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{email}</p>
      {age && <p>Age: {age}</p>}
    </div>
  );
}
```

## Best Practices

1. **Use interfaces for props** - More extensible than types
2. **Enable strict mode** in tsconfig.json
3. **Avoid `any` type** - Use `unknown` when needed
4. **Leverage type inference** - Don't over-annotate

## Conclusion

TypeScript significantly improves the development experience in React applications. Start small, and gradually adopt more advanced features as you become comfortable.
