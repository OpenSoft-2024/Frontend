import React, { useRef } from "react";
import { useSelector } from "react-redux";
import useFetch from "../../custumHooks/useFetch";
import TopRatedMovieCard from "./TopRatedMovieCard";
import { useEffect } from "react";
import { useState } from "react";
import ar from "../../../public/ar.png";
import al from "../../../public/al.png";
import MovieCard from "../MovieCard";

function TopRatedFlex({ label, endPoint }) {
  const trunct = (str) => {
    if (str.length < 100) {
      return str;
    } else {
      return str.slice(0, 100) + "...";
    }
  };
  let loadingSkeltonArray = ["a", "b", "c", "d", "e", "f"];
  const { url, rand } = useSelector((state) => state.AppSlice);
  const [data, setData] = useState(null);
  const { heroImg, isLoading, error } = useFetch(`${endPoint}?page=${rand}`);
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
    <div className="relative w-screen mt-10 ">
      <div>
        <h1 className="text-white text-xl ml-[25px] ">{label}</h1>
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
        <div
          className="wrapeer flex pl-8 py-10 pb-20 mt-3 gap-3 overflow-y-hidden overflow-x-hidden"
          ref={myRef}
        >
          {data?.results.map((item) => (
            <TopRatedMovieCard
              img={url.backdrop + item.backdrop_path}
              img2={url.poster + item.backdrop_path}
              about={item.overview}
              date={item.release_date}
              title={item.title}
            />
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
