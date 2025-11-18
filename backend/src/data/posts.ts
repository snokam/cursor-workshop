export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  imageUrl: string;
}

export const posts: Post[] = [
  {
    id: "1",
    title: "Getting Started with AI-Assisted Development",
    slug: "getting-started-ai-development",
    excerpt: "Learn how to leverage AI tools to boost your productivity as a developer.",
    content: "AI-assisted development is revolutionizing how we write code. In this post, we'll explore the basics of working with AI coding assistants and how they can help you become more productive...",
    author: "Morten",
    publishedAt: "2024-01-15T10:00:00Z",
    tags: ["AI", "Development", "Productivity"],
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
  },
  {
    id: "2",
    title: "Building Modern Web Apps with Next.js",
    slug: "building-modern-web-apps-nextjs",
    excerpt: "A comprehensive guide to building fast, SEO-friendly web applications.",
    content: "Next.js has become the go-to framework for React developers. With features like server-side rendering, static site generation, and API routes, it provides everything you need to build modern web applications...",
    author: "Morten",
    publishedAt: "2024-01-20T14:30:00Z",
    tags: ["Next.js", "React", "Web Development"],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
  },
  {
    id: "3",
    title: "TypeScript Best Practices for 2024",
    slug: "typescript-best-practices-2024",
    excerpt: "Essential TypeScript patterns and practices for writing maintainable code.",
    content: "TypeScript continues to grow in popularity, and with good reason. Strong typing helps catch errors early and makes code more maintainable. Here are the best practices you should follow in 2024...",
    author: "Morten",
    publishedAt: "2024-02-01T09:00:00Z",
    tags: ["TypeScript", "Best Practices", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
  },
  {
    id: "4",
    title: "Introduction to Monorepos with npm Workspaces",
    slug: "introduction-monorepos-npm-workspaces",
    excerpt: "How to organize your projects using npm workspaces for better code sharing.",
    content: "Monorepos allow you to manage multiple packages in a single repository. npm workspaces make this easy by handling dependencies and allowing you to share code between packages...",
    author: "Morten",
    publishedAt: "2024-02-10T11:00:00Z",
    tags: ["Monorepo", "npm", "Architecture"],
    imageUrl: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800",
  },
  {
    id: "5",
    title: "Cursor Workshop: Hands-on AI Coding",
    slug: "cursor-workshop-hands-on-ai-coding",
    excerpt: "Join us for a practical workshop on using Cursor for AI-assisted development.",
    content: "In this workshop, we'll build a complete web application using Cursor's AI capabilities. You'll learn how to effectively prompt the AI, review suggestions, and iterate quickly on your code...",
    author: "Morten",
    publishedAt: "2024-02-15T13:00:00Z",
    tags: ["Cursor", "Workshop", "AI"],
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
  },
];
