import React, { useRef } from "react";
import { useSelector } from "react-redux";
import useFetch from "../../custumHooks/useFetch";
import TopRatedMovieCard from "./TopRatedMovieCard";
import { useEffect } from "react";
import { useState } from "react";
import ar from "../../../public/ar.png";
import al from "../../../public/al.png";
import MovieCard from "../MovieCard";

function TopRatedFlex() {
  let loadingSkeltonArray = ["a", "b", "c", "d", "e", "f"];
  const { url } = useSelector((state) => state.AppSlice);
  const [data, setData] = useState(null);
  const { heroImg, isLoading, error } = useFetch("/movie/top_rated");
  useEffect(() => {
    setData(heroImg);
  }, [heroImg]);
  const myRef = useRef(null);
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
    <div className="relative w-screen">
      <div>
        <h1 className="text-white text-2xl">top Rated</h1>
      </div>
      <div className="box-overlay1 absolute top-30 left-10 text-white group">
        <i
          className="ri-arrow-left-circle-fill text-white relative top-24 left-0 text-2xl invisible group-hover:visible opacity-65 hover:opacity-100"
          onClick={() => navigation("left")}
        ></i>
      </div>
      <div className="box-overlay2 absolute top-30 text-white  group ">
        <i
          className="ri-arrow-right-circle-fill text-white relative top-24  text-2xl  invisible group-hover:visible opacity-65 hover:opacity-100"
          onClick={() => navigation("right")}
        ></i>
      </div>
      {data ? (
        <div className="wrapeer flex  mt-3 gap-3 overflow-x-hidden" ref={myRef}>
          {data?.results.map((item) => (
            <TopRatedMovieCard img={url.backdrop + item.backdrop_path} />
          ))}
        </div>
      ) : (
        <div className="flex gap-4 mt-8 ">
          {loadingSkeltonArray.map((item) => (
            <div className="w-64 h-40 blinker rounded"></div>
          ))}{" "}
        </div>
      )}
    </div>
  );
}

export default TopRatedFlex;
