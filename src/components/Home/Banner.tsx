import Image from 'next/image';
import Link from 'next/link';
import BannerImg from '@/assets/banner_img.png';

const Banner = () => {
  return (
    <section className="w-full bg-slate-100/80 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start justify-center space-y-6 lg:space-y-8 text-center lg:text-left">
            <h1 className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight sm:leading-snug lg:leading-[1.15] tracking-tight">
              Books to freshen up your bookshelf
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
              Explore our curated selection of timeless classics and modern bestsellers. Dive into compelling stories that inspire and elevate your reading journey.
            </p>
            <Link
              href="/listed-books"
              className="inline-flex items-center justify-center bg-(--primary) hover:opacity-90 text-white font-semibold text-base sm:text-lg px-7 py-3.5 rounded-xl shadow-md transition-all duration-200 cursor-pointer active:scale-98"
            >
              View The List
            </Link>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center w-full">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md aspect-3/4 transition-transform duration-300 hover:scale-105">
              <Image
                src={BannerImg}
                alt="Hero Books Collection"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain object-center drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;