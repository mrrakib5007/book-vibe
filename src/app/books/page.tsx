import { IBook } from "@/type/bookType";
import BookCard from "@/components/Cards/BookCard";

const getBooks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/booksData.json`);
  const data = await res.json();
  return data;
}

const BooksPage = async () => {
  const booksData: IBook[] = await getBooks();

  return (
    <div className='my-10 container mx-auto'>
      <div>
        <h2 className='font-playfair text-center font-bold text-2xl lg:text-4xl'>Explore All Book</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {
            booksData.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
          }
      </div>
    </div>
  )
}

export default BooksPage