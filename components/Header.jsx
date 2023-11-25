import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-base-200">
      <nav className="max-w-screen-lg mx-auto items-center flex border-b border-gray-300 bg-base-100 justify-between text-slate-700 relative">
        <div className="drawer z-10">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <div className="w-full navbar px-6 bg-base-100">
              {/* Navbar */}
              <div className="flex-1">
                <Link href="/" className="font-medium text-md">
                  Next Redux Blog
                </Link>
              </div>
              <div className="flex-none md:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-none hidden md:block">
                <ul className=" menu menu-horizontal space-x-6">
                  {/* Navbar menu content here */}
                  <Link href={"/"}>Home</Link>
                  <Link href={"/admin"}>Admin</Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-8 w-80 min-h-full bg-base-100">
              {/* Sidebar content here */}
              <Link
                href={"/"}
                className="text-slate-700 text-xl font-medium py-6 border-b border-gray-300"
              >
                Home
              </Link>
              <Link
                href={"/admin"}
                className="text-slate-700 text-xl font-medium py-6 border-b border-gray-300"
              >
                Admin
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
