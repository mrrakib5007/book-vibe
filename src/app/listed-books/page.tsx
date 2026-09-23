"use client";
import { useContext, useState } from "react";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/type/bookType";
import ListedBookCard from "@/components/Cards/ListedBookCard";
import { FiBookOpen, FiChevronDown, FiPlusCircle, FiSliders } from "react-icons/fi";
import Link from "next/link";

interface BooksContextType {
  readBooks: IBook[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  wishlistBooks: IBook[];
  setWishlistBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
}

const ListedBooksPage = () => {
  const { readBooks, wishlistBooks } = useContext(
    BooksContext,
  ) as BooksContextType;
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortOption, setSortOption] = useState<"rating" | "pages" | "year" | "">("");

  const handleSortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];

    if (sortOption === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortOption === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    return sortedBooks;
  }

  return (
    <div className="container mx-auto mt-5">
      <div className="mb-10">
        <div className="py-6 px-5 text-center bg-gray-300 rounded-2xl">
          <h1 className="text-4xl font-bold">Books</h1>
        </div>
<div className="flex justify-center mt-5">
  <div className="relative">
    <button
      type="button"
      onClick={() => setIsSortOpen(!isSortOpen)}
      className="flex items-center gap-2 min-w-48 px-4 py-3 rounded-xl bg-(--primary) text-white font-medium shadow-md hover:brightness-95 transition-all duration-200 cursor-pointer"
    >
      <FiSliders className="text-lg" />

      <span className="flex-1 text-left">
        {sortOption === ""
          ? "Sort by"
          : sortOption === "rating"
            ? "Ratings"
            : sortOption === "pages"
              ? "Number of pages"
              : "Publish year"}
      </span>

      <FiChevronDown
        className={`text-lg transition-transform duration-200 ${
          isSortOpen ? "rotate-180" : ""
        }`}
      />
    </button>

    {isSortOpen && (
      <div className="absolute z-50 top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden p-1">
        <button
          type="button"
          onClick={() => {
            setSortOption("");
            setIsSortOpen(false);
          }}
          className="w-full text-left px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
        >
          Sort by
        </button>

        <button
          type="button"
          onClick={() => {
            setSortOption("rating");
            setIsSortOpen(false);
          }}
          className="w-full text-left px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
        >
          Ratings
        </button>

        <button
          type="button"
          onClick={() => {
            setSortOption("pages");
            setIsSortOpen(false);
          }}
          className="w-full text-left px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
        >
          Number of pages
        </button>

        <button
          type="button"
          onClick={() => {
            setSortOption("year");
            setIsSortOpen(false);
          }}
          className="w-full text-left px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
        >
          Publish year
        </button>
      </div>
    )}
  </div>
</div>
      </div>

      <div>
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab"
            aria-label={`Read Books (${readBooks.length})`}
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <div className="grid grid-cols-1 gap-5">
              {readBooks.length > 0 ? (
                handleSortBooks(readBooks).map((book: IBook) => (
                  <ListedBookCard key={book.bookId} book={book} />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-16 px-5 text-center">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-5">
                    <FiBookOpen className="text-gray-400 text-4xl" />
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                    No Read Books Found
                  </h2>

                  <p className="text-gray-500 mt-2 max-w-md">
                    You haven&apos;t added any books to your read list yet.
                  </p>

                  <Link href="/books" className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-(--primary) text-white font-semibold hover:brightness-90 transition">
                    <FiPlusCircle />
                    Explore Books
                  </Link>
                </div>
              )}
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            className="tab"
            aria-label={`Wishlist Books (${wishlistBooks.length})`}
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <div className="grid grid-cols-1 gap-5">
              {wishlistBooks.length > 0 ? (
                handleSortBooks(wishlistBooks).map((book: IBook) => (
                  <ListedBookCard key={book.bookId} book={book} />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-16 px-5 text-center">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-5">
                    <FiBookOpen className="text-gray-400 text-4xl" />
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                    No Wishlist Books Found
                  </h2>

                  <p className="text-gray-500 mt-2 max-w-md">
                    You haven&apos;t added any books to your wishlist yet.
                  </p>

                  <Link href="/books" className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-(--primary) text-white font-semibold hover:brightness-90 transition">
                    <FiPlusCircle />
                    Explore Books
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksPage;
