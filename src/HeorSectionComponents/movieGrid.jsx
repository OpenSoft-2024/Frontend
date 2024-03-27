import React from "react";
import MovieCard from "./MovieCard";
import m2 from "../assets/m2.webp";
import { useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../custumHooks/useFetch";
import { useEffect } from "react";
import Img from "../lazyLoading/Img";
import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function MovieGrid({ label }) {
  let loadingSkeltonArray = ["a", "b", "c", "d", "e", "f"];
  const [data, setData] = useState(null);

  const myRef = useRef(null);
  const { heroImg, isLoading, error } = useFetch("/trending/all/day");
  console.log(heroImg);
  const { url } = useSelector((state) => state.AppSlice);

  useEffect(() => {
    setData(heroImg);
  }, [heroImg]);

  const navigation = (dir) => {
    const container = myRef.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 15)
        : container.scrollLeft + (container.offsetWidth + 15);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={"relative oei9342 w-screen"}>
      <h1 className="text-white ml-4  text-opacity-[0.6] text-lg mt-20  capitalize">
        {label}
      </h1>
      <div className="box-overlayl absolute   text-white"></div>
      <div className="box-overlayr absolute  text-white  "></div>
      <i
        class=" i1 ri-arrow-right-circle-line text-white  absolute top-28 text-3xl w-fit  cursor-pointer  "
        onClick={() => navigation("right")}
      ></i>
      <i
        className=" i2 ri-arrow-left-circle-line text-white  absolute top-28 right-10 text-3xl  w-fit cursor-pointer  "
        onClick={() => navigation("left")}
      ></i>
      <div className="flex  w-screen gap-3 movie-grid scrool-smooth  relative  ">
        {data ? (
          <div
            className=" gap-3 kdowei overflow-x-hidden flex transition-all overflow-y-hidden  justify-between  "
            ref={myRef}
          >
            {data?.results.map((item) => (
              <MovieCard img={url.poster + item.poster_path} key={item.id} />
            ))}
          </div>
        ) : (
          <div className="w-screen flex gap-4 movie-grid mt-4 mb-12">
            {loadingSkeltonArray.map((item) => (
              <div className="w-[25%] h-96 blinker rounded-lg"></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieGrid;
