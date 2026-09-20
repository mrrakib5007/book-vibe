'use client'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';
import { IBook } from "@/type/bookType";
import Loading from './loading';
import { TbBooksOff } from 'react-icons/tb';

export default function BookDetailsPage() {
  const { bookId } = useParams();
  const [book, setBook] = useState<IBook | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch('/booksData.json');
        const data: IBook[] = await response.json();
        const singleBook = data.find((b) => b.bookId === Number(bookId));
        setBook(singleBook || null);
      } catch (error) {
        console.error('Error fetching book data:', error);
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
                By: <span className="text-slate-800 font-semibold">{book.author}</span>
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
                <span className="font-bold text-slate-900">{book.totalPages}</span>

                <span className="text-slate-500">Publisher:</span>
                <span className="font-bold text-slate-900">{book.publisher}</span>

                <span className="text-slate-500">Year of Publishing:</span>
                <span className="font-bold text-slate-900">{book.yearOfPublishing}</span>

                <span className="text-slate-500">Rating:</span>
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <span>{book.rating?.toFixed(1)}</span>
                  <FaStar className="w-4 h-4 text-amber-400" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button className="px-6 py-3 rounded-xl border-2 border-slate-900 font-semibold text-slate-900 hover:bg-slate-900 hover:text-white cursor-pointer text-sm sm:text-base transition-all duration-300">
                Read
              </button>
              <button className="px-6 py-3 rounded-xl bg-(--secondary-color) font-semibold text-white hover:brightness-90 transition-opacity cursor-pointer shadow-md text-sm sm:text-base">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}