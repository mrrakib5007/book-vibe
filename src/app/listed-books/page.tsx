"use client";
import { useContext } from "react";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/type/bookType";
import ListedBookCard from "@/components/Cards/ListedBookCard";
import { FiBookOpen, FiPlusCircle } from "react-icons/fi";
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

  return (
    <div className="container mx-auto mt-5">
      <div className="mb-10">
        <div className="py-6 px-5 text-center bg-gray-300 rounded-2xl">
          <h1 className="text-4xl font-bold">Books</h1>
        </div>
        <div className="flex justify-center">
          <select
            name="booksFilter"
            id="booksFilter"
            className="mt-5 px-4 py-3 rounded-lg border border-gray-300 bg-(--primary) text-white outline-none"
          >
            <option value="">Sort by:</option>
            <option value="rating">Ratings</option>
            <option value="totalPages">Number of pages</option>
            <option value="yearOfPublishing">Publish year</option>
          </select>
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
                readBooks.map((book: IBook) => (
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

                  <Link href="/" className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-(--primary) text-white font-semibold hover:brightness-90 transition">
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
                wishlistBooks.map((book: IBook) => (
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

                  <Link href="/" className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-(--primary) text-white font-semibold hover:brightness-90 transition">
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
