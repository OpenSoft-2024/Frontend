import React from "react";

import SearchPageMovieCard from "./searchPageMovieCard";
import useFetch from "../custumHooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { RiHome3Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { setIsNavBarVisible } from "../AppStore/AppSlicer";
import { NavLink } from "react-router-dom";

function SearchPage() {
  let dispatch = useDispatch();
  const [data, setData] = useState(null);
  const { url, rand, isNavBarVisible } = useSelector((state) => state.AppSlice);
  const { heroImg, isLoading, error } = useFetch(
    `/trending/all/day?page=${rand}`
  );
  console.log(heroImg);

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
    setIsNavBarVisible(dispatch(true));
  };
  return (
    <div className={`bg-[#050404] w-screen min-h-[100vh] relative  `}>
      <div
        className={`w-screen   pt-10   ${
          active ? "color" : ""
        } flex justify-between`}
      >
        <NavLink to="/" onClick={handleOnClick}>
          {" "}
          <RiHome3Line
            className=" text-white absolute right-8 text-[2.4rem] top-[3.7%] hover:text-red-700 "
            onClick={handleOnClick}
          />
        </NavLink>
        <input
          type="search"
          placeholder="Search for movie or tv shows "
          className=" pl-3 ml-4 w-[70%] h-[3.3rem] rounded-lg text-white text-opacity-[0.8] text-xl   outline-none bg-[#3c3c3c]  left-[3.3%]  placeholder:text-xl capitalize"
        />

        <button className="mr-[10%] h-[75%] mt-3 bg-red-500 text-[#ffffffcf] right-[5%] px-6   top-[135%] rounded-sm py-2 capitalize">
          filter
        </button>
      </div>
      <div className="w-screen grid   sm:grid-cols-4 pt-20 md:grid-col-8 lg:grid-cols-6 max-lg:grid-cols-12 gap-4 px-10">
        {data?.results.map((item) => (
          <SearchPageMovieCard img={url?.poster + item.poster_path} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
