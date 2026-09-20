'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';
import logoImg from '@/assets/logo.png';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Listed Books', path: '/listed-books' },
    { name: 'Pages to Read', path: '/pages-to-read' },
  ];

  return (
    <div className="bg-white sticky top-0 z-40">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="shrink-0 flex items-center gap-2 cursor-pointer group">
              <Image 
                src={logoImg} 
                alt="Book Vibe Logo" 
                width={36} 
                height={36} 
                className="w-9 h-9 object-contain"
              />
              <span className="text-2xl font-black tracking-tight text-black select-none">
                Book Vibe
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-3">
              {navItems.map((item) => {
                const isActive = pathname === item.path;

                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`px-4 py-2 text-sm font-semibold rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'border-(--primary) text-(--primary) bg-transparent'
                        : 'border-transparent text-slate-600 hover:border-(--primary)/40 hover:text-(--primary)'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button className="px-5 py-2.5 text-sm font-semibold text-white bg-(--primary) hover:opacity-90 rounded-xl shadow-md transition-all duration-200 cursor-pointer">
                Sign In
              </button>
              <button className="px-5 py-2.5 text-sm font-semibold text-white bg-(--secondary-color) hover:opacity-90 rounded-xl shadow-md transition-all duration-200 cursor-pointer">
                Sign Up
              </button>
            </div>

            <div className="flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer select-none"
                aria-label="Open Navigation Menu"
              >
                <HiMenu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 md:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 right-0 bottom-0 w-72 bg-white z-50 md:hidden shadow-2xl transition-transform duration-300 ease-in-out flex flex-col justify-between p-6 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Image 
                src={logoImg} 
                alt="Book Vibe Logo" 
                width={30} 
                height={30} 
                className="w-7 h-7 object-contain"
              />
              <span className="text-xl font-black tracking-tight text-black">
                Book Vibe
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close Navigation Menu"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full text-left px-4 py-3 text-base font-semibold rounded-xl border-2 transition-all cursor-pointer ${
                    isActive
                      ? 'border-(--primary) text-(--primary) bg-transparent'
                      : 'border-transparent text-slate-600 hover:text-(--primary)'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
          <button className="w-full py-3 text-sm font-semibold text-white bg-(--primary) hover:opacity-90 rounded-xl shadow-md transition-all cursor-pointer">
            Sign In
          </button>
          <button className="w-full py-3 text-sm font-semibold text-white bg-(--secondary-color) hover:opacity-90 rounded-xl shadow-md transition-all cursor-pointer">
            Sign Up
          </button>
        </div>
      </aside>
    </div>
  );
}