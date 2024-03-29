import React from "react";

import SearchPageMovieCard from "./searchPageMovieCard";
import useFetch from "../custumHooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { RiHome3Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { setIsNavBarVisible } from "../AppStore/AppSlicer";
// import { useHistory } from 'react-router-dom';
import { NavLink } from "react-router-dom";

function SearchPage() {
  let dispatch = useDispatch();
  const [data, setData] = useState(null);
  const { url, rand, isNavBarVisible } = useSelector((state) => state.AppSlice);
  const { heroImg, isLoading, error } = useFetch(
    `/trending/all/day?page=${rand}`
  );
  console.log(heroImg);

  useEffect(() => {
    dispatch(setIsNavBarVisible(false));
  }, []);

  let [active, setActive] = useState(false);
  useEffect(() => {
    setData(heroImg);
  }, [heroImg]);
  const handleOnScroll = (e) => {
    if (window.scrollY > 230) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  window.addEventListener("scroll", handleOnScroll);
  const handleOnClick = (e) => {
    console.log(e);
    dispatch(setIsNavBarVisible(true));
  };
  return (
    <div className={`bg-[#050404] w-screen min-h-[100vh] relative  `}>
      <div
        className={`w-screen   pt-10   ${
          active ? "color" : ""
        } flex justify-between`}
      >
        <svg
          className="absolute w-[1.9rem] top-12 left-12    test-white fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
        </svg>

        <input
          type="search"
          placeholder="Search for movie or tv shows "
          className=" pl-14  ml-[2.4%] w-[70%] h-[3.3rem] rounded-lg text-white text-opacity-[0.8] text-xl   outline-none bg-[#3c3c3c]    placeholder:text-xl capitalize"
        />
        <NavLink to="/" onClick={handleOnClick}>
          <div className="absolute bg-red-600 capitalize top-[2.8%] right-[3%] px-6 hover:scale-[1.05]  rounded py-2 text-white">
            home
          </div>
        </NavLink>
      </div>
      <div className="w-screen grid   sm:grid-cols-4 pt-20 md:grid-col-8 lg:grid-cols-6 max-lg:grid-cols-12 gap-4 px-20">
        {data?.results.map((item) =>
          item ? (
            <SearchPageMovieCard
              img={url?.poster + item.poster_path}
              img2={url?.poster + item.backdrop_path}
              about={item.overview}
              date={item.release_date}
            />
          ) : (
            <div className="w-[10rem]  blinker h-[25rem]"></div>
          )
        )}
      </div>
    </div>
  );
}

export default SearchPage;
