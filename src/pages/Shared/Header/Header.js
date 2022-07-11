import React from "react";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';
import Logo from "../../../Images/Logo/logo-light.png";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-sans font-bold"
          >
            <li >
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/Menu">Menu</Link>
            </li>
            <li>
              {
                user?
                <button onClick={logout} class="btn btn-ghost">
                  Logout
                </button>
                :
                <Link to="/login">Login</Link>
              }
               
            </li>
          </ul>
        </div>
        <Link to="/" class="btn btn-ghost normal-case text-xl">Slices Pizza</Link>
      </div>



      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0 font-sans font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/Menu">Menu</Link>
          </li>
          <li>
              {
                user?
                <button onClick={logout} class="btn btn-ghost">
                  Logout
                </button>
                :
                <Link to="/login">Login</Link>
              }
               
            </li>
        </ul>
      </div>
      <div class="navbar-end">
        <a class="btn">Get started</a>
      </div>
    </div>
  );
};

export default Header;
