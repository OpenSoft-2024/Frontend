import React from "react";
import MovieCard from "./MovieCard";
import m2 from "../assets/m2.webp";
import { useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../custumHooks/useFetch";
import { useEffect } from "react";
import Img from "../lazyLoading/Img";
import { useRef } from "react";

import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { server } from "../../server";

function MovieGrid({ label, data }) {
  let loadingSkeltonArray = ["a", "b", "c", "d", "e", "f"];
  // console.log(Data);
  // const [data, setData] = useState(Data);
  // console.log(data);
  console.log(data);

  const myRef = useRef(null);

  // useEffect(() => {

  //   const getfetch=async()=>{
  //     try{

  //       const res=await axios.get(`${server}/movies/latest`)
  //       console.log(res);
  //       setData(res.data)
  //     }
  //     catch(err)
  //     {
  //       console.log(err);
  //     }
  //   }
  //  getfetch()
  // }, []);

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
    <div className={"relative oei9342 w-screen ml-4"}>
      <h1 className="text-white ml-4  text-opacity-[0.6] text-lg mt-20  capitalize">
        {label}
      </h1>
      <div className=" w-[10%] h-[90%]   z-[6000]  right-[0%] absolute  text-white  group ">
        <i
          className="ri-arrow-right-circle-fill cursor-pointer text-white relative top-[50%] left-[20%]  text-3xl  invisible group-hover:visible opacity-65 hover:opacity-100"
          onClick={() => navigation("right")}
        ></i>
      </div>
      <div className=" w-[10%] h-[90%]   z-[6000] left-[0%] absolute   text-white group">
        <i
          className="ri-arrow-left-circle-fill cursor-pointer text-white relative top-[50%] left-0 text-3xl invisible group-hover:visible opacity-65 hover:opacity-100"
          onClick={() => navigation("left")}
        ></i>
      </div>
      <div className="flex  w-screen gap-3 movie-grid scrool-smooth  relative  ">
        {data ? (
          <div
            className=" gap-6 kdowei overflow-x-hidden flex transition-all overflow-y-hidden  justify-between  "
            ref={myRef}
          >
            {data?.map((item) => (
              <MovieCard img={item.poster} key={item._id} about={item.plot} date={item.released
              } genres={item.
                genres
                }/>
            ))}
          </div>
        ) : (
          <div className="w-screen flex gap-4 movie-grid mt-4 mb-12">
            {loadingSkeltonArray.map((item, index) => (
              <div
                key={index}
                className="w-[25%] h-96 blinker rounded-lg"
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieGrid;
