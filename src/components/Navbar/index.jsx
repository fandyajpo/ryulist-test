"use client";

import Link from "next/link";
import InputSearch from "./InputSearch";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolling, setScrolling] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <header
      className={`bg-gray-700 fixed w-full z-50 transition-all duration-300 ${
        scrolling ? "h-16" : "h-0 overflow-hidden"
      }`}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center justify-between ">
          <div className="md:flex md:items-center md:gap-12">
            <Link href="/" className="block text-teal-600 font-bold ">
              ひらりとリュタ
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    href="/"
                    className={`transition ${
                      currentPath === "/"
                        ? "text-white border-b-2 border-white"
                        : "text-gray-500"
                    } hover:text-white hover:border-white`}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/popular"
                    className={`transition ${
                      currentPath === "/popular"
                        ? "text-white border-b-2 border-white"
                        : "text-gray-500"
                    } hover:text-white hover:border-white`}
                  >
                    Populer Anime
                  </Link>
                </li>

                <li>
                  <Link
                    href="/upcoming"
                    className={`transition ${
                      currentPath === "/upcoming"
                        ? "text-white border-b-2 border-white"
                        : "text-gray-500"
                    } hover:text-white hover:border-white`}
                  >
                    Upcoming Anime
                  </Link>
                </li>

                <li>
                  <Link
                    href="/manga"
                    className={`transition ${
                      currentPath === "/manga"
                        ? "text-white border-b-2 border-white"
                        : "text-gray-500"
                    } hover:text-white hover:border-white`}
                  >
                    Manga
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <InputSearch />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
