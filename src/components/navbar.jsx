import { NavLink } from "react-router-dom";
import { useState } from "react";
const NavBar = () => {
  const handleOnClick = (e) => {
    e.target.style = "width:40vw";
  };
  // const handleOnLeave = (e) => {
  //   e.target.style = "width:22vw";
  // };

  let [active, setActive] = useState(false);
  const handleOnScroll = () => {
    if (window.scrollY > 230) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  window.addEventListener("scroll", handleOnScroll);
  return (
    <>
      <div
        className={`nav-box w-screen flex justify-between px-8 items-center py-4 bg-eoio302 bg-transparent  fixed  ${
          active ? "changeTheBackground" : "nonchange"
        } `}
      >
        <div className="logo w-30 h-10  overflow-hidden">
          <div className="cmny-logo-animation-oejje cursor-pointer">
            <h1 className="text-3xl  text-content mix-blend-difference text-opacity-80">
              Movie
              <span className="text-white text-opacity-60 bg-blend-difference">
                Cinema
              </span>
            </h1>
            <h1 className="text-3xl text-content mix-blend-difference">
              Movie
              <span className=" text-white text-opacity-60 bg-blend-difference">
                Cinema
              </span>
            </h1>
          </div>
        </div>
        <div className="searchBox relative">
          <div className="input-container">
            <input
              type="search"
              name=""
              id=""
              className="bg-black rounded-3xl text-white main-search-box  px-4 py-4 outline-none "
              placeholder="movies"
              onClick={handleOnClick}
            />
          </div>
          <svg
            className="absolute w-5 top-3 right-3 test-white fill-slate-200"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
          </svg>
        </div>
        <div className="navLinks ">
          <ul className="flex gap-10 capitalize mr-4 text-white mt-2">
            <li className="w-10 h-10 rounded-xl ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-lg font-extrabold ${isActive ? "acv" : "nonacv"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AddToFavourite"
                className={({ isActive }) =>
                  ` text-lg ${isActive ? "acv" : "nonacv"}`
                }
              >
                favourite
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/plans"
                className={({ isActive }) =>
                  ` text-lg  ${isActive ? "acv" : "nonacv"}`
                }
              >
                plans
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                classN  ame={({ isActive }) =>
                  ` text-lg  ${isActive ? "acv" : "nonacv"}`
                }
              >
                Log in
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/MySpace"
                classN  ame={({ isActive }) =>
                  ` text-lg  ${isActive ? "acv" : "nonacv"}`
                }
              >
                My Space
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;