# Book Vibe

Book Vibe is a modern book discovery and reading-tracker app built with Next.js. It lets readers explore a curated library, view detailed book information, save books to a read list or wishlist, and track reading progress in a clean and responsive interface.

## Overview

This project is designed as a personal bookshelf experience for readers who want to discover books, keep track of what they have read, and plan future reading goals. The app uses a local book catalog and client-side state to manage the reading journey without requiring a backend.

## Features

- Responsive home page with a book-focused hero section and featured books
- Full catalog browsing page for exploring all available titles
- Dynamic book detail pages with cover image, author, review, tags, rating, publisher, and page count
- Read list and wishlist management with duplicate prevention and toast notifications
- Sortable book lists by rating, page count, or publication year
- Reading progress visualization using a bar chart on the Pages to Read page
- Reusable layout components including navbar and footer
- Loading states and empty-state screens for book collection pages
- Data-driven design using a local JSON catalog
- Built with Next.js App Router, TypeScript, and Tailwind CSS

**Github Repo:** [https://github.com/mrrakib5007/book-vibe](https://github.com/mrrakib5007/book-vibe)  
**Live Preview:** [https://book-vibe-dev.vercel.app](https://book-vibe-dev.vercel.app)

## Pages and Routes

| Route           | Description                                                   |
| --------------- | ------------------------------------------------------------- |
| /               | Landing page with banner and featured book sections           |
| /books          | Browse the complete book collection                           |
| /books/[bookId] | View a specific book's full details                           |
| /listed-books   | Manage read books and wishlist items in separate tabs         |
| /pages-to-read  | View a visual reading-progress chart based on collected books |

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- React Icons
- Recharts
- React Toastify
- ESLint

## Project Structure

```text
book-vibe/
├── public/
│   └── booksData.json           # Local book catalog
├── src/
│   ├── app/
│   │   ├── books/
│   │   │   ├── page.tsx         # Browse all books
│   │   │   └── [bookId]/page.tsx # Book detail page
│   │   ├── listed-books/page.tsx # Read list + wishlist organizer
│   │   ├── pages-to-read/page.tsx # Reading progress chart
│   │   ├── layout.tsx
│   │   ├── page.tsx            # Homepage
│   │   └── globals.css
│   ├── components/
│   │   ├── Cards/
│   │   ├── Home/
│   │   └── shared/
│   ├── context/
│   │   └── BooksContext.tsx    # Global read/wishlist state
│   └── type/
│       └── bookType.ts         # Book data interface
├── package.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone <your-repository-url>
cd book-vibe
npm install
```

### Run the app locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the app.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Run a production build
npm run start    # Start the compiled production app
npm run lint     # Run ESLint checks
```

## Data Source

Book information is stored in [public/booksData.json](public/booksData.json). The app reads from this file to render the catalog and book details. You can add or edit entries in that JSON file to expand the collection.

## Notes

- The app currently uses local client-side state for managing read books and wishlist items.
- The project is a front-end reading app and does not include a backend database or authentication flow yet.

## Author

Developed by MrRakib5007.
