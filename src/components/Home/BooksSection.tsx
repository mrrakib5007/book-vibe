import { IBook } from "@/type/bookType";
import BookCard from "../Cards/BookCard";
import Link from "next/link";

const getBooks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/booksData.json`);

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const data = await res.json();

  return data;
};

const BooksSection = async () => {
  const booksData: IBook[] = await getBooks();

  return (
    <div className="my-25 container mx-auto">
      <div>
        <h2 className="font-playfair text-center font-bold text-2xl lg:text-4xl">
          Books
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {booksData.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>

      {booksData.length >= 9 && (
        <div className="flex justify-center mt-10">
          <Link
            href="/books"
            className="px-6 py-3 rounded-full bg-(--primary) text-white font-semibold hover:brightness-90 transition"
          >
            View All Books
          </Link>
        </div>
      )}
    </div>
  );
};

export default BooksSection;