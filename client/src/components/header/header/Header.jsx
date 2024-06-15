import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import HeaderBtn from "../../buttons/headerBtn/HeaderBtn";
import { FaRegEdit } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from 'sweetalert2'

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const menu = (
    <>
      <li className="font-bold">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-main-color overline"
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
            isPending ? "" : isActive ? "text-main-color overline" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-main-color overline" : ""
          }
        >
          Blog
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-main-color overline" : ""
          }
        >
          Contact
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-main-color overline" : ""
          }
        >
          Add Product
        </NavLink>
      </li>
    </>
  );
  // handle logout
  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log out Successfully",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch();
  };
  return (
    <div className="flex justify-center">
      <div className="navbar absolute z-40 max-w-7xl">
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
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-circle avatar border-4 border-main-color"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt={user.displayName}
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <HeaderBtn
              link={"/register"}
              text={"-Sign In"}
              icon={<FaRegEdit />}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
