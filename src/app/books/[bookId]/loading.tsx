export default function Loading() {
  return (
    <main className="w-full bg-white py-8 sm:py-12 lg:py-16 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 bg-slate-100 rounded-3xl p-8 sm:p-12 flex items-center justify-center">
            <div className="w-full max-w-xs sm:max-w-sm aspect-3/4 bg-slate-200/80 rounded-2xl" />
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <div className="h-10 sm:h-12 bg-slate-200 rounded-xl w-3/4 mb-3" />
              <div className="h-5 bg-slate-200 rounded-lg w-1/3 mb-6" />

              <div className="border-t border-slate-200 my-4" />

              <div className="h-5 bg-slate-200 rounded-lg w-1/4 mb-4" />

              <div className="border-t border-slate-200 my-4" />

              <div className="space-y-3 mb-6">
                <div className="h-4 bg-slate-200 rounded-md w-full" />
                <div className="h-4 bg-slate-200 rounded-md w-full" />
                <div className="h-4 bg-slate-200 rounded-md w-4/5" />
                <div className="h-4 bg-slate-200 rounded-md w-2/3" />
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="h-6 bg-slate-200 rounded-md w-12" />
                <div className="h-6 bg-slate-200 rounded-full w-20" />
                <div className="h-6 bg-slate-200 rounded-full w-24" />
              </div>

              <div className="border-t border-slate-200 my-6" />

              <div className="grid grid-cols-2 gap-y-4 max-w-md">
                <div className="h-4 bg-slate-200 rounded-md w-32" />
                <div className="h-4 bg-slate-200 rounded-md w-16" />

                <div className="h-4 bg-slate-200 rounded-md w-24" />
                <div className="h-4 bg-slate-200 rounded-md w-28" />

                <div className="h-4 bg-slate-200 rounded-md w-36" />
                <div className="h-4 bg-slate-200 rounded-md w-16" />

                <div className="h-4 bg-slate-200 rounded-md w-20" />
                <div className="h-4 bg-slate-200 rounded-md w-16" />
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="h-12 w-28 bg-slate-200 rounded-xl" />
              <div className="h-12 w-32 bg-slate-200 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}