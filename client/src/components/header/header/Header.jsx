import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import HeaderBtn from "../../buttons/headerBtn/HeaderBtn";

const Header = () => {
  const menu = (
    <>
      <li className="font-bold">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-main-color line-through"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-main-color line-through " : ""
          }
        >
          About
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-main-color line-through " : ""
          }
        >
          Blog
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-main-color line-through " : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end">
        <HeaderBtn/>
      </div>
    </div>
  );
};

export default Header;
