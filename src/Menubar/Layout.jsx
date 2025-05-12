import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-gray-200 py-4 px-4 sm:px-6">
        <nav className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link to="/" className="font-bold text-2xl sm:text-3xl">
              Dazi
            </Link>

            {/* Desktop Navigation - Main Links */}
            <ul className="hidden md:flex flex-row gap-6 justify-center">
              <li>
                <Link
                  to="/products"
                  className="text-sm md:text-base hover:underline"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/newarrival"
                  className="text-sm md:text-base hover:underline"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  to="/sunglasses"
                  className="text-sm md:text-base hover:underline"
                >
                  Sunglasses
                </Link>
              </li>
              <li>
                <Link
                  to="/eyeglasses"
                  className="text-sm md:text-base hover:underline"
                >
                  Eyeglasses
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm md:text-base hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/gift"
                  className="text-sm md:text-base hover:underline"
                >
                  Gift Card
                </Link>
              </li>
            </ul>

            {/* Desktop Navigation - User Links with Icons */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/userimage"
                className="text-white hover:text-gray-200 h-7 w-7 bg-gray-900 rounded-full flex items-center justify-center"
                aria-label="User profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>
              <Link
                to="/login"
                className="text-sm md:text-base hover:underline"
              >
                Log In
              </Link>
              <Link
                to="/cart"
                className="text-gray-700 hover:text-gray-900 relative"
                aria-label="Shopping cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>

            {/* Mobile Navigation - Icons and Menu Button */}

            <div className="flex items-center gap-4 md:hidden">
              {!isMenuOpen && (
                <div className="flex items-center gap-4">
                  <Link
                    to="/userimage"
                    className="text-white hover:text-gray-200 h-7 w-7 bg-gray-900 rounded-full flex items-center justify-center"
                    aria-label="User profile"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </Link>
                  <Link
                    to="/cart"
                    className="text-gray-700 hover:text-gray-900 relative"
                    aria-label="Shopping cart"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      0
                    </span>
                  </Link>
                </div>
              )}

              <button
                onClick={toggleMenu}
                className="text-gray-600 cursor-pointer hover:text-gray-900 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 text-center font-bold">
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    to="/products"
                    className="text-sm hover:underline"
                    onClick={toggleMenu}
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/newarrival"
                    className="text-sm hover:underline"
                    onClick={toggleMenu}
                  >
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sunglasses"
                    className="text-sm hover:underline"
                    onClick={toggleMenu}
                  >
                    Sunglasses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/eyeglasses"
                    className="text-sm hover:underline"
                    onClick={toggleMenu}
                  >
                    Eyeglasses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-sm hover:underline"
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gift"
                    className="text-sm hover:underline"
                    onClick={toggleMenu}
                  >
                    Gift Card
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="text-sm hover:underline"
                    onClick={toggleMenu}
                  >
                    Log In
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
      <main className="flex-grow p-0 max-w-none w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
