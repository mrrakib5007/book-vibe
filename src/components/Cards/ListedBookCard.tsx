import { IBook } from "@/type/bookType";
import Image from "next/image";
import Link from "next/link";
import {
  FiBookOpen,
  FiCalendar,
  FiFileText,
} from "react-icons/fi";

const ListedBookCard = ({ book }: { book: IBook }) => {
  const {
    bookId,
    bookName,
    image,
    author,
    yearOfPublishing,
    publisher,
    category,
    tags,
    totalPages,
    rating,
  } = book;

  return (
    <div className="border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full sm:w-64 md:w-68 lg:w-72 aspect-square bg-gray-200 rounded-xl p-4 flex items-center justify-center shrink-0 overflow-hidden">
          <Image
            src={image}
            alt={bookName}
            width={400}
            height={400}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="w-full flex flex-col">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              {bookName}
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mt-1">
              By: {author}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-sm sm:text-base">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-black">Tag:</span>

              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className="text-(--primary) font-medium"
                >
                  #{tag}
                  {index < tags.length - 1 && ","}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <FiCalendar className="shrink-0" />

              <span>
                <span className="font-medium">
                  Year of Publishing:
                </span>{" "}
                {yearOfPublishing}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-x-6 mt-4 text-gray-500 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <FiBookOpen className="shrink-0" />

              <span>
                Publisher: {publisher}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <FiFileText className="shrink-0" />

              <span>
                Page: {totalPages}
              </span>
            </div>
          </div>

          <hr className="border-gray-200 my-4" />

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold">
              Category: {category}
            </span>

            <span className="px-3 py-1.5 rounded-full bg-orange-50 text-orange-500 text-sm font-semibold">
              Rating: {rating}
            </span>

            <Link
              href={`/books/${bookId}`}
              className="inline-flex items-center justify-center bg-(--primary) text-white py-2 px-5 rounded-full font-semibold text-sm sm:text-base hover:brightness-90 transition"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;