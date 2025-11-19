# Cursor Workshop

A starter project for learning AI-assisted development with Cursor.

## Project Structure

```
cursor-workshop/
├── frontend/          # Next.js application
├── backend/           # Express API server
└── micros/            # Micro-frontends (navbar, footer)
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development servers

```bash
npm run dev
```

This starts both:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

### Run individually

```bash
npm run dev:frontend    # Frontend only
npm run dev:backend     # Backend only
```

## API Endpoints

- `GET /api/posts` - List blog posts
- `GET /api/posts/:slug` - Get single post
- `GET /api/tags` - Get all tags
- `GET /api/health` - Health check

---

## Workshop Tasks

### Task 1: Blog Frontpage

Create a frontpage that displays all blog posts from the API.

- Fetch all posts from `/api/posts`
- Display posts in a grid with cards (image, title, excerpt, date, tags)
- Include loading and error states
- Add proper styling

---

### Task 2: Post Detail Page

Add navigation to view full blog post content.

- Create a dynamic page at `/blog/[slug]`
- Fetch post by slug from `/api/posts/:slug`
- Display full content with image, author, date, and tags
- Add back navigation to the frontpage
- Handle 404 for non-existent posts

---

### Task 3: Filtering & Search

Enable users to find posts by tag or search term.

- Add tag filter buttons/chips on the frontpage
- Implement search input for filtering by title
- Add backend endpoint for search if needed
- Show empty state when no results match

---

### Task 4: Related Posts

Show related content on the post detail page.

- Display related posts based on shared tags
- Exclude the current post from suggestions
- Limit to 3 related posts
- Link to the related post pages

---

### Task 5: Admin Panel

Create an admin interface for managing blog posts.

- Add `/admin` route with post list
- Implement create new post form
- Add edit functionality for existing posts
- Include delete with confirmation
- Add backend CRUD endpoints (POST, PUT, DELETE)

---

### Task 6: Authentication

Protect the admin panel with authentication.

- Add login page
- Implement simple auth (can be hardcoded credentials)
- Protect admin routes
- Add logout functionality
- Show current user in header

---

### Bonus Challenges

- Dark/light theme toggle
- Pagination or infinite scroll
- Image upload for posts
- Draft/published status for posts
- Comments system
- SEO meta tags per post
