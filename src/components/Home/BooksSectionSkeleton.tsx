const BooksSectionSkeleton = () => {
  return (
    <div className="my-25 container mx-auto animate-pulse">
      <div className="flex justify-center">
        <div className="h-10 w-32 bg-gray-200 rounded-md" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="border border-gray-200 rounded-2xl overflow-hidden"
          >
            <div className="h-72 bg-gray-200" />

            <div className="p-5">
              <div className="h-6 w-3/4 bg-gray-200 rounded-md" />

              <div className="h-4 w-1/2 bg-gray-200 rounded-md mt-3" />

              <div className="h-4 w-full bg-gray-200 rounded-md mt-5" />

              <div className="h-4 w-4/5 bg-gray-200 rounded-md mt-2" />

              <div className="flex gap-3 mt-5">
                <div className="h-9 w-24 bg-gray-200 rounded-full" />
                <div className="h-9 w-24 bg-gray-200 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksSectionSkeleton;