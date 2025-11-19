# AI Agents Documentation

This document describes how AI agents can be used to assist with development in this Cursor Workshop project.

## Overview

This project is designed to work with AI-assisted development tools like Cursor. The codebase follows patterns that make it easy for AI agents to understand and modify.

## Project Structure

```
cursor-workshop/
├── frontend/          # Next.js application
├── backend/           # Express API server
└── micros/            # Micro-frontends (navbar, footer)
```

## Agent-Friendly Patterns

### Code Style

- **Arrow Functions**: Always use arrow functions and ES6+ syntax
- **TypeScript**: Full type safety across all packages
- **Consistent Naming**: Clear, descriptive names for components and functions

### Component Architecture

- **Component Organization**: Components are organized in folders with `index.tsx` and `styled.tsx` files
- **Type Definitions**: Types are defined in separate `types.tsx` files when needed
- **Styled Components**: Using Emotion for styling with separation of concerns

## Common Agent Tasks

### 1. Adding New Features

Agents can help implement new features by:
- Creating new components following existing patterns
- Adding API endpoints in the backend
- Integrating micro-frontends when needed

**Example Request:**
```
Add a new blog post detail page at /blog/[slug] that displays full post content
```

### 2. Refactoring

Agents can refactor code while maintaining:
- Type safety
- Existing functionality
- Code style consistency

**Example Request:**
```
Refactor the post card component to use a more modern layout
```

### 3. Bug Fixes

Agents can help identify and fix issues:
- Type errors
- Runtime errors
- Logic bugs
- Styling issues

**Example Request:**
```
Fix the API client to handle errors properly
```

### 4. Testing

Agents can help add tests:
- Unit tests for components
- Integration tests for API endpoints
- E2E tests for user flows

## Development Workflows

### Starting Development

```bash
# Install dependencies
npm install

# Start all services
npm run dev

# Or start individually
npm run dev:frontend
npm run dev:backend
```

### Adding Dependencies

When agents add new dependencies:
1. Add to the appropriate `package.json` (root, frontend, backend, or micros)
2. Run `npm install` to update lock file
3. Import and use in code

### Creating New Components

Agents should follow this structure:

```
ComponentName/
├── index.tsx      # Main component logic
├── styled.tsx     # Styled components (if using Emotion)
└── types.tsx      # TypeScript types (if needed)
```

## API Integration

### Backend Endpoints

The backend provides RESTful APIs:
- `GET /api/posts` - List all posts
- `GET /api/posts/:slug` - Get single post
- `GET /api/tags` - Get all tags
- `GET /api/health` - Health check

### Frontend API Client

Located at `frontend/src/clients/api.ts`, this client handles:
- API requests
- Error handling
- Type-safe responses

## Micro-Frontend Architecture

The project uses micro-frontends for:
- **Navbar** (`micros/navbar-web`)
- **Footer** (`micros/footer-web`)

Agents working with micro-frontends should:
- Maintain versioned components (`v1/`, `v2/`, etc.)
- Keep demo pages for testing
- Follow the same component structure patterns

## Best Practices for Agents

1. **Read Before Writing**: Always read existing files to understand patterns
2. **Type Safety**: Maintain TypeScript types throughout
3. **Consistency**: Follow existing code style and patterns
4. **Testing**: Consider adding tests for new features
5. **Documentation**: Update relevant docs when adding features

## Common Patterns

### React Components

```typescript
import React from 'react';
import { styled } from '@emotion/react';

const Container = styled.div`
  // styles here
`;

export const MyComponent = () => {
  return (
    <Container>
      {/* component content */}
    </Container>
  );
};
```

### API Endpoints

```typescript
app.get('/api/endpoint', (req, res) => {
  // handler logic
  res.json({ data: 'response' });
});
```

### Type Definitions

```typescript
export interface MyType {
  id: string;
  name: string;
}
```

## Troubleshooting

### Common Issues

1. **Type Errors**: Ensure all types are properly imported and defined
2. **Module Resolution**: Check workspace configuration in root `package.json`
3. **Port Conflicts**: Backend runs on 3001, frontend on 3000

### Getting Help

When agents encounter issues:
1. Check existing code for similar patterns
2. Review TypeScript errors carefully
3. Ensure dependencies are installed
4. Verify workspace configuration

## Future Enhancements

Agents can help implement:
- Authentication system
- Admin panel
- Search and filtering
- Related posts feature
- Image uploads
- Comments system
- SEO improvements

See `README.md` for detailed task descriptions.
