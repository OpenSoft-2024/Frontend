import React from "react";
import l1 from "../assets/l1.jpg";
import c5 from "../assets/c5.jpg";
import TopRatedFlex from "../HeorSectionComponents/TopRated/TopRatedFlex";
import MovieGridForMoviePlayback from "./MovieGridForMoviePlayback";
function MoviePlayback() {
  return (
    <div className="relative">
      <div className="relative">
        <div className="w-screen  h-full ">
          <img src={c5} alt="" />
        </div>
        <div className="overlay-04 absolute"></div>
        <div className="overlay-05 absolute"></div>
        {/* <div className="overlay-06 absolute w-full h-full"></div> */}
        <div className="absolute top-[35%]  flex flex-col gap-2 left-[5%] ">
          <h1 className="text-white text-[3vw]">Loki The God of mischief</h1>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-white inline-block">26 Apr 2024</span>
            <span className="w-2 h-2 rounded-full bg-[white] inline-block text-[#dddbdb]"></span>
            <span className="text-white inline-block">language</span>
            <span className="inline-block w-2 h-2 rounded-full bg-white">
              {" "}
            </span>
            <span className="P-6  px-4 inline-block rounded-lg bg-[#89838379] text-white ">
              UA/+7
            </span>
          </div>
          <p className="text-[#d1d1d1] w-[50%] text-wrap  mt-[2vw] capitalize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            provident aspernatur accusamus sit eum libero, obcaecati quas
            corporis excepturi quos. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sapiente, aliquid.
          </p>
          <p className="text-[#d6d6d6] flex gap-3 mt-4">
            <span>Super-Hero </span>
            <span className="w-[2px] h-6 bg-white inline-block"></span>
            <span>sci-fi</span>
            <span className="w-[2px] h-6 bg-white inline-block"></span>
            <span>Fantasy</span>
          </p>
          <div className="mt-8 items-center  flex gap-6">
            <button className="py-5 px-24 bg-[#f8f8f8] inline-block hover:scale-[1.07] smt rounded text-black font-bold">
              PLAY
            </button>
            <button className="text-white py-4 px-7 rounded inline-block hover:scale-[1.06] smt bg-[#9491913d] text-3xl">
              +
            </button>
          </div>
          <div className="genres"></div>
        </div>
      </div>

      <TopRatedFlex
        label={"More Like This"}
        endPoint={"/trending/movie/week"}
      ></TopRatedFlex>
      <MovieGridForMoviePlayback
        endPoint={"/trending/movie/day"}
        label={"Because You watch Madam Web"}
      ></MovieGridForMoviePlayback>
    </div>
  );
}

export default MoviePlayback;
