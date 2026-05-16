# Infinite Articles

A multi-page Next.js site with nested layouts and an infinite-scroll homepage.

Built with **Next.js 16** (App Router), **Tailwind CSS v4**, and the [DummyJSON](https://dummyjson.com) API.

## Routes

| Route | Description |
|---|---|
| `/` | Homepage — server-rendered first 8 articles, infinite scroll via IntersectionObserver |
| `/about` | Narrow centered layout, light gray background |
| `/articles` | Two-column layout with tag sidebar |
| `/articles/[id]` | Single article page |
| `/contact` | Split-view layout with decorative panel |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
