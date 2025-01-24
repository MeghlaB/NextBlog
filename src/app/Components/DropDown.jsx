'use client'

import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { useState } from "react";

function DropDown() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">

      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu */}
      <ul
        className={`absolute right-2  lg:static lg:mt-0 flex flex-col lg:flex-row items-start lg:items-center w-56 lg:w-auto bg-white border rounded-lg shadow-md  gap-3 lg:gap-5 py-2 transition-all duration-300 ${isMenuOpen ? "block" : "hidden lg:flex"
          }`}
      >
        <li>
          <Link href="/" className="px-4 py-2 hover:bg-gray-200 rounded">
            Home
          </Link>
        </li>
        <li>
          <Link href="/profile" className="px-4 py-2 hover:bg-gray-200 rounded">
            Profile
          </Link>
        </li>
        <li>

          <button className='btn-custom border-none hidden lg:inline py-4'>
            <LogoutLink>LogOut</LogoutLink>
          </button>
        </li>
        <li>
          <button className='btn-custom border-none hidden lg:inline py-4'>
            <RegisterLink>SignIn</RegisterLink>
          </button>
        </li>
        <li>
          <button className='btn-custom border-none hidden lg:inline py-4'>
            <LoginLink>SignIn</LoginLink>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
