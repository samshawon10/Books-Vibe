import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-primary font-bold' : ''
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/listedbooks"
          className={({ isActive }) =>
            isActive ? 'text-primary font-bold' : ''
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/PagetoRead"
          className={({ isActive }) =>
            isActive ? 'text-primary font-bold' : ''
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 rounded-b-3xl shadow-md">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className=" text-2xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Books Vibe
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        <a className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 border-none">
          Sign In
        </a>
        <a className="btn bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600 border-none">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
