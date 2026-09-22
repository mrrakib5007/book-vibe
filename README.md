# Book Vibe

Book Vibe is a modern book discovery and reading-list application built with Next.js. Readers can explore curated books, view detailed book information, organize books they want to read, and keep their reading experience in one focused place.

## Features

- Responsive homepage with a book-focused hero banner.
- Curated book collection loaded from `public/booksData.json`.
- Book cards with cover image, title, author, category, rating, and review information.
- Dedicated books listing page for browsing the full collection.
- Dynamic book details page for individual books.
- Pages to Read section for managing reading goals.
- Listed Books section for organizing saved or listed books.
- Responsive navigation bar with desktop links and a mobile menu.
- Reusable footer with navigation, support links, social links, and newsletter signup UI.
- Responsive layout for mobile, tablet, and desktop screens.
- Optimized fonts using `next/font` with Roboto and Playfair Display.
- TypeScript support for shared book data types and application code.

## Pages and Routes

| Route             | Description                                      |
| ----------------- | ------------------------------------------------ |
| `/`               | Homepage with banner, featured books, and footer |
| `/books`          | Browse all available books                       |
| `/books/[bookId]` | View details for a specific book                 |
| `/listed-books`   | View listed books                                |
| `/pages-to-read`  | View books planned for reading                   |

## Tech Stack

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [React Icons](https://react-icons.github.io/react-icons/)
- ESLint for code quality

## Project Structure

```text
src/
|-- app/
|   |-- page.tsx                 # Homepage
|   |-- books/                   # Book listing and dynamic details pages
|   |-- listed-books/            # Listed books page
|   |-- pages-to-read/           # Reading goals page
|   `-- globals.css              # Global styles and theme variables
|-- assets/components/
|   |-- Cards/                   # Book card components
|   |-- Home/                    # Homepage banner and book sections
|   `-- shared/                  # Navbar and Footer
`-- type/                        # Shared TypeScript types
public/
`-- booksData.json               # Book catalogue data
```

## Getting Started

### Prerequisites

- Node.js 20 or newer recommended
- npm

### Installation

```bash
git clone <your-repository-url>
cd book-vibe
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run lint     # Run ESLint
npm run build    # Create a production build
npm run start    # Start the production server
```

## Data Source

Book information is currently stored in [`public/booksData.json`](public/booksData.json). The homepage and books pages read from this local catalogue, so new books can be added by following the existing JSON structure.

## Author

Developed by **MrRakib5007**.
