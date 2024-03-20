import React from "react";
import MovieCard from "./MovieCard";
import m2 from "../assets/m2.webp";
import { useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../custumHooks/useFetch";
import { useEffect } from "react";
import Img from "../lazyLoading/Img";
import { useRef } from "react";

function MovieGrid({ label }) {
  const [data, setData] = useState(null);
  const myRef = useRef(null);
  const { heroImg, isLoading, error } = useFetch("/trending/all/week");

  const { url } = useSelector((state) => state.AppSlice);

  useEffect(() => {
    setData(heroImg);
  }, [heroImg]);

  // const handleOnRight = (e) => {
  //   myRef.current.style.transform = "translateX(-30%)";
  // };
  // const handleOnleft = (e) => {
  //   myRef.current.style.transform = "translateX(30%)";
  // };

  const navigation = (dir) => {
    const container = myRef.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={"relative oei9342"}>
      <h1 className="text-white ml-4 capitalize text-lg mt-20  ">{label}</h1>
      <i
        class=" i1 ri-arrow-right-circle-line text-white  absolute top-28 text-3xl w-fit  cursor-pointer  "
        onClick={() => navigation("right")}
      ></i>
      <i
        class=" i2 ri-arrow-left-circle-line text-white  absolute top-28 right-10 text-3xl  w-fit cursor-pointer  "
        onClick={() => navigation("left")}
      ></i>
      <div className="flex  w-screen gap-3 movie-grid scrool-smooth  relative  eijw323">
        <div
          className=" gap-3 kdowei overflow-x-hidden flex transition-all overflow-y-hidden  "
          ref={myRef}
        >
          {data?.results.map((item) => (
            <MovieCard img={url.poster + item.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieGrid;
