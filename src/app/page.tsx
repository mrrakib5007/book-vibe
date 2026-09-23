import { Suspense } from "react";
import Banner from "@/components/Home/Banner";
import BooksSection from "@/components/Home/BooksSection";
import BooksSectionSkeleton from "@/components/Home/BooksSectionSkeleton";

export default function Home() {
  return (
    <div>
      <Banner />

      <Suspense fallback={<BooksSectionSkeleton />}>
        <BooksSection />
      </Suspense>
    </div>
  );
}