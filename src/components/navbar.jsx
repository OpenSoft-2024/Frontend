import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setIsNavBarVisible } from "../AppStore/AppSlicer";

const NavBar = () => {
  let [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  let dropDownLink = useRef(null);
  let dropDownContent = useRef(null);
  let [color, setColor] = useState(false);
  const handleOnClick = (e) => {
    e.target.style = "width:40vw";
  };
  const handleOnLeave = (e) => {
    e.target.style = "width:22vw";
  };

  let [active, setActive] = useState(false);
  const handleOnScroll = (e) => {
    if (window.scrollY > 230) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  window.addEventListener("scroll", handleOnScroll);
  // const rotateOnClick = (e) => {
  //   e.target.style = "transform:rotate(deg)";
  // };

  let { isNavBarVisible } = useSelector((state) => state.AppSlice);
  let dispatch = useDispatch();
  const hideOrShowOnClick = (e) => {
    isNavBarVisible
      ? dispatch(setIsNavBarVisible(false))
      : dispatch(setIsNavBarVisible(true));
  };

  return (
    <>
      <div
        className={`nav-box w-screen flex overflow-x-hidden overflow-y-hidden ${
          isNavBarVisible ? "visible opacity-[1]" : "invisible opacity-[0]"
        } px-8 items-center py-4 bg-eoio302   fixed  ${
          active ? "color" : "nonchange"
        } `}
      >
        <div className="logo w-30 h-10  overflow-hidden">
          <div className="cmny-logo-animation-oejje cursor-pointer">
            <a href="">
              <h1 className="text-3xl  text-content mix-blend-difference text-opacity-80">
                Movie
                <span className="text-white text-opacity-60 bg-blend-difference">
                  Cinema
                </span>
              </h1>
            </a>
            <h1 className="text-3xl text-content mix-blend-difference">
              Movie
              <span className=" text-white text-opacity-60 bg-blend-difference">
                Cinema
              </span>
            </h1>
          </div>
        </div>

        <div className="navLinks ml-[10%]">
          <ul className="flex gap-10 capitalize mr-4 text-white mt-2">
            <li className="w-10   rounded-xl ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-[1rem] font-extrabold ${isActive ? "acv" : "nonacv"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AddToFavourite"
                className={({ isActive }) =>
                  ` text-[1rem] ${isActive ? "acv" : "nonacv"}`
                }
                // onClick={hideOrShowOnClick}
              >
                MyStuffs
              </NavLink>
            </li>

            <li>
              <div className="languages cursor-pointer relative">
                <p className="text-[1rem] text-[white] flex">
                  languages
                  <IoIosArrowDropdownCircle className="mt-1 ml-2 dropdownarrow" />
                </p>
              </div>
            </li>
            <li>
              <NavLink
                to="/plans"
                onClick={hideOrShowOnClick}
                className={({ isActive }) =>
                  ` text-[1rem]  customButton  ${isActive ? "" : "nonacv"}`
                }
              >
                premium
              </NavLink>
            </li>
          </ul>
        </div>

        <NavLink to="/searchPage" onClick={hideOrShowOnClick}>
          <div className="searchBox absolute top-[32%] left-[63%]   rounded-xl  bg-zinc-300 flex justify-center items-center">
            <input
              type="search"
              disabled
              className="w-[20rem] h-[2.4rem] bg-transparent  searchBar00i px-4 pr-10  rounded outline-none text-white placeholder:capitalize"
              placeholder="serch for movies and tv shows"
            />
            <svg
              className="absolute w-5 top-2 right-3 test-white fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
            </svg>
          </div>
        </NavLink>

        {!isUserLoggedIn ? (
          <div className="userImage absolute right-[2%]">
            <div className="w-10 h-10 rounded-full bg-white">
              <img src="" alt="" />
            </div>
          </div>
        ) : (
          ""
        )}
        {!isUserLoggedIn ? (
          <div className="absolute right-[8%]">
            <NavLink to="/login" className="text-white capitalize">
              sign-up
            </NavLink>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default NavBar;