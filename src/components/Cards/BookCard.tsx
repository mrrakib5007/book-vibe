'use client'
import { IBook } from "@/type/bookType";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";


const BookCard = ({ book }: { book: IBook }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <Link 
  href={`/books/${bookId}`}
  className="group flex flex-col justify-between bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
>
      <div>
        <div className="bg-slate-200 rounded-2xl py-8 px-4 flex items-center justify-center overflow-hidden mb-6">
          <div className="relative w-36 h-48 transition-transform duration-300 group-hover:scale-105">
            <Image 
              src={image} 
              alt={bookName} 
              fill 
              sizes="(max-width: 768px) 100vw, 200px"
              className="object-contain drop-shadow-md" 
            />
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs font-semibold rounded-full bg-(--primary)/10 text-(--primary)"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="font-playfair text-xl font-bold text-slate-900 line-clamp-1 mb-2 group-hover:text-(--primary) transition-colors">
          {bookName}
        </h2>

        <p className="text-sm font-medium text-slate-600 mb-4">
          By: {author}
        </p>
      </div>

      <div>
        <div className="border-t border-dashed border-slate-200 my-4" />

        <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
          <span>{category}</span>
          <div className="flex items-center gap-1.5">
            <span>{rating.toFixed(1)}</span>
            <FaStar className="w-4 h-4 text-amber-400" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;