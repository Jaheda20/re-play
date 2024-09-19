import React from "react";
import Image from "next/image";
import logo from "/app/logo.png";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";

const MainNav = () => {
  return (
    <div className="navbar bg-base-100 mt-4 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <Image src={logo} alt="logo re-shop" className="w-12 h-12" />
          <div className="flex flex-col items-start">
            <Link
              href={"/"}
              className="text-yellow-600 font-bold text-2xl tracking-wider uppercase"
            >
              Re-play
            </Link>
            <p className="text-xs text-slate-500 font-medium">
              Fun Fresh Again
            </p>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow w-96"
            placeholder="Search in ...."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label> */}
      </div>
      <div className="navbar-end">
        <label className="input input-bordered flex items-center gap-2 mr-10">
          <input
            type="text"
            className="grow w-96"
            placeholder="Search in ...."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <div className="flex items-center space-x-6">
          <FiHeart size={28} />
          <LuUser2 size={28} />
          <BsCart3 size={28} />
        </div>
      </div>
    </div>
  );
};

export default MainNav;
