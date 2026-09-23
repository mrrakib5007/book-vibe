"use client";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { IBook } from "@/type/bookType";
import Loading from "./loading";
import { TbBooksOff } from "react-icons/tb";
import { toast } from "react-toastify";
import { BooksContext } from "@/context/BooksContext";

interface BooksContextType {
  readBooks: IBook[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  wishlistBooks: IBook[];
  setWishlistBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export default function BookDetailsPage() {
  const { bookId } = useParams();
  const [book, setBook] = useState<IBook | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { readBooks, setReadBooks, wishlistBooks, setWishlistBooks } =
    useContext(BooksContext) as BooksContextType;
  const isAlreadyInReadList = readBooks.some((b) => b.bookId === book?.bookId);
  const isAlreadyInWishlist = wishlistBooks.some(
    (b) => b.bookId === book?.bookId,
  );

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch("/booksData.json");
        const data: IBook[] = await response.json();
        const singleBook = data.find((b) => b.bookId === Number(bookId));
        setBook(singleBook || null);
      } catch (error) {
        console.error("Error fetching book data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (bookId) {
      fetchBookDetails();
    }
  }, [bookId, setBook, setLoading]);

  if (loading) {
    return <Loading />;
  }

  if (!book) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-4">
        <div className="p-4 rounded-full bg-slate-100 text-slate-400">
          <TbBooksOff className="w-16 h-16 sm:w-20 sm:h-20" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 font-playfair">
          Book Not Found
        </h2>
        <p className="text-slate-500 max-w-sm text-sm sm:text-base">
          The book you are looking for does not exist or may have been removed.
        </p>
      </div>
    );
  }

  const handleAddToRead = () => {
    // dupllicate check for read list and dissable button if already in read list
    const isAlreadyInReadList = readBooks.some((b) => b.bookId === book.bookId);
    if (isAlreadyInReadList) {
      toast.error(`"${book.bookName}" is already in your Read list.`);
      return;
    }
    setReadBooks([...readBooks, book]);
    toast.success(`Added "${book.bookName}" to Read list.`);
  };

  const handleAddToWishlist = () => {
    // duplicate check for wishlist and dissable button if already in wishlist
    const isAlreadyInWishlist = wishlistBooks.some(
      (b) => b.bookId === book.bookId,
    );
    if (isAlreadyInWishlist) {
      toast.error(`"${book.bookName}" is already in your Wishlist.`);
      return;
    }
    setWishlistBooks([...wishlistBooks, book]);
    toast.success(`Added "${book.bookName}" to Wishlist.`);
  };

  console.log("Read Books:", readBooks);
  console.log("Wishlist Books:", wishlistBooks);

  return (
    <main className="w-full bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 bg-slate-100/80 rounded-3xl p-8 sm:p-12 flex items-center justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm aspect-3/4">
              <Image
                src={book.image}
                alt={book.bookName}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-2">
                {book.bookName}
              </h1>
              <p className="text-base sm:text-lg font-medium text-slate-600 mb-4">
                By:{" "}
                <span className="text-slate-800 font-semibold">
                  {book.author}
                </span>
              </p>

              <div className="border-t border-slate-200 my-4" />

              <p className="text-base font-semibold text-slate-700 mb-4">
                {book.category}
              </p>

              <div className="border-t border-slate-200 my-4" />

              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  <span className="font-bold text-slate-900">Review: </span>
                  <span className="text-slate-600">{book.review}</span>
                </p>

                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-bold text-slate-900 text-sm">Tag:</span>
                  {book.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-(--primary)/10 text-(--primary)"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-200 my-6" />

              <div className="grid grid-cols-2 gap-y-3 max-w-md text-sm sm:text-base">
                <span className="text-slate-500">Number of Pages:</span>
                <span className="font-bold text-slate-900">
                  {book.totalPages}
                </span>

                <span className="text-slate-500">Publisher:</span>
                <span className="font-bold text-slate-900">
                  {book.publisher}
                </span>

                <span className="text-slate-500">Year of Publishing:</span>
                <span className="font-bold text-slate-900">
                  {book.yearOfPublishing}
                </span>

                <span className="text-slate-500">Rating:</span>
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <span>{book.rating?.toFixed(1)}</span>
                  <FaStar className="w-4 h-4 text-amber-400" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={handleAddToRead}                
                className={`px-6 py-3 rounded-xl font-semibold transition-opacity shadow-md text-sm sm:text-base cursor-pointer ${
                  isAlreadyInReadList
                    ? "bg-gray-300 text-gray-500"
                    : "bg-(--primary) text-white hover:brightness-90"
                }`}
              >
                {isAlreadyInReadList
                  ? "Already in Read List"
                  : "Add to Read List"}
              </button>
              <button
                onClick={handleAddToWishlist}                
                className={`px-6 py-3 rounded-xl font-semibold transition-opacity shadow-md text-sm sm:text-base cursor-pointer ${
                  isAlreadyInWishlist
                    ? "bg-gray-300 text-gray-500"
                    : "bg-(--primary) text-white hover:brightness-90"
                }`}
              >
                {isAlreadyInWishlist
                  ? "Already in Wishlist"
                  : "Add to Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
