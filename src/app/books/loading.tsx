import React from 'react'

const Loading = () => {
  return (
    <div className="my-10 container mx-auto px-4">
      <div className="flex justify-center">
        <div className="h-9 w-64 bg-slate-200 animate-pulse rounded-md" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="p-4 border border-slate-100 rounded-xl shadow-sm bg-white space-y-4 animate-pulse">
            <div className="h-48 w-full bg-slate-200 rounded-lg" />
            <div className="space-y-2">
              <div className="h-5 w-3/4 bg-slate-200 rounded" />
              <div className="h-4 w-1/2 bg-slate-200 rounded" />
            </div>
            <div className="flex justify-between items-center pt-2">
              <div className="h-6 w-16 bg-slate-200 rounded" />
              <div className="h-9 w-24 bg-slate-200 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Loading