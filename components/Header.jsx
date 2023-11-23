"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-base-200">
      <nav className="max-w-screen-lg mx-auto px-4 border-b border-gray-300 items-center flex py-3 bg-base-100 justify-between text-slate-700 relative ">
        <div className="">
          <h3 className="font-bold text-xl">Next Redux Blog</h3>
        </div>
        <div className="">
          <div className="">
            <button
              className="block md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className=" inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <div
              className={
                isOpen
                  ? "block md:hidden absolute right-0 w-full  origin-top-right shadow-lg md:w-48 z-10 "
                  : "hidden md:hidden absolute right-0 w-full  origin-top-right shadow-lg md:w-48 z-10"
              }
            >
              <div className="px-2 py-2 bg-white">
                <Link
                  className="block px-4 py-2 text-sm font-semibold bg-transparent md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/add"
                >
                  Add post
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <Link href="/add" className="font-medium text-md">
            Add Post
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
