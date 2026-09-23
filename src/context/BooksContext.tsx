'use client';

import { IBook } from "@/type/bookType";
import { createContext, useState } from "react";

interface BooksContextType {
    readBooks: IBook[];
    setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
    wishlistBooks: IBook[];
    setWishlistBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<BooksContextType | null>(null);

const BooksProvider = ({ children }: { children: React.ReactNode }) => {
    const [readBooks, setReadBooks] = useState<IBook[]>([]);
    const [wishlistBooks, setWishlistBooks] = useState<IBook[]>([]);

    const contextValue = {
        readBooks,
        setReadBooks,
        wishlistBooks,
        setWishlistBooks,
    };

  return (
    <BooksContext.Provider value={contextValue}>
        {children}
    </BooksContext.Provider>
  )
}

export default BooksProvider