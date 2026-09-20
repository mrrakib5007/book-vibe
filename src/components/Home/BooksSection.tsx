import { IBook } from "@/type/bookType";
import BookCard from "../Cards/BookCard";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
}

const BooksSection = async () => {
  const booksData: IBook[] = await getBooks();

  return (
    <div className='my-25 container mx-auto'>
      <div>
        <h2 className='font-playfair text-center font-bold text-2xl lg:text-4xl'>Books</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {
            booksData.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
          }
      </div>
    </div>
  )
}

export default BooksSection