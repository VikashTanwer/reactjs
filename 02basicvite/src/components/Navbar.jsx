import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">MyApp</a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`md:flex items-center space-x-6 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <NavLink to ="/" className="hover:text-gray-300">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-gray-300">
            About
          </NavLink>
          <a href="/about/usememo" className="hover:text-gray-300">
            Services
          </a>
          <NavLink to="/contect" className="hover:text-gray-300">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
    <Outlet/>
    </>
  );
};

export default Navbar;
