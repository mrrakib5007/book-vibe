const Loading = () => {
  return (
    <div className="container mx-auto mt-5 animate-pulse">
      <div className="mb-10">
        <div className="py-6 px-5 text-center bg-gray-200 rounded-2xl">
          <div className="h-10 w-32 bg-gray-300 rounded-lg mx-auto" />
        </div>

        <div className="flex justify-center">
          <div className="mt-5 h-12 w-44 bg-gray-200 rounded-lg" />
        </div>
      </div>

      <div className="tabs tabs-lift">
        <div className="flex gap-2">
          <div className="h-10 w-36 bg-gray-200 rounded-t-lg" />
          <div className="h-10 w-44 bg-gray-200 rounded-t-lg" />
        </div>

        <div className="border border-gray-200 p-6">
          <div className="grid grid-cols-1 gap-5">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="border border-gray-200 rounded-2xl p-4 sm:p-5"
              >
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="w-full sm:w-64 md:w-68 lg:w-72 aspect-square bg-gray-200 rounded-xl shrink-0" />

                  <div className="w-full">
                    <div className="h-7 w-3/4 bg-gray-200 rounded-md" />

                    <div className="h-5 w-1/3 bg-gray-200 rounded-md mt-3" />

                    <div className="flex flex-wrap gap-3 mt-5">
                      <div className="h-5 w-16 bg-gray-200 rounded-md" />
                      <div className="h-5 w-20 bg-gray-200 rounded-md" />
                      <div className="h-5 w-40 bg-gray-200 rounded-md" />
                    </div>

                    <div className="flex flex-wrap gap-5 mt-5">
                      <div className="h-5 w-40 bg-gray-200 rounded-md" />
                      <div className="h-5 w-36 bg-gray-200 rounded-md" />
                    </div>

                    <div className="h-px bg-gray-200 my-5" />

                    <div className="flex flex-wrap gap-3">
                      <div className="h-9 w-32 bg-gray-200 rounded-full" />
                      <div className="h-9 w-24 bg-gray-200 rounded-full" />
                      <div className="h-10 w-32 bg-gray-200 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;