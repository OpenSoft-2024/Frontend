import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
// import { Slice } from "@reduxjs/toolkit";
import { Ref } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
// import {ref}
import img from "../assets/heroTitle.png";
import BackgroundImage from "../LandingPageBackgroundImageContext/context";
import { LazyLoadImage } from "react-lazy-load-image-component";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import useFetch from "../custumHooks/useFetch";
import { useNavigate } from "react-router-dom";
import HeroDescSkelton from "../loadingSkelton/heroloadingSkelton";
function HeroMovieDesc() {
  // console.log(document.getElementsByClassName("description")[0]);
  //   let mycont = useRef(null);
  let navigate = useNavigate();
  const { url, genres, rand } = useSelector((state) => state.AppSlice);
  const [data, setData] = useState(null);
  const { heroImg, isLoading, error } = useFetch(`/movie/upcoming?`);
  useEffect(() => {
    setData(heroImg);
  }, [heroImg]);
  console.log(data);
  // const { url, genres,rand } = useSelector((state) => state.AppSlice);

  const truncted = (str) => {
    if (str?.length > 140) {
      str = str.slice(0, 140) + ".....";
    }
    return str;
  };
  let [overview] = useAutoAnimate();
  //   const ele = document.getElementsByClassName("description")[0];
  let { bgImage, bgImageDescription } = useContext(BackgroundImage);
  //   let about = bgImageDescription.overview;
  //   let anotherAbout = about.substring(0,180);
  const mycont = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);

  const handleOnchange = () => {
    setIsAnimated(true);
    setTimeout(() => {
      setIsAnimated(false);
    }, 1000);
  };
  const vishal = ["vishal"];

  useEffect(() => {
    handleOnchange();
  }, [bgImage]);
  let maxLength = 180;

  return (
    <>
      <div
        ref={mycont}
        className={`description lg:w-5/12  absolute right-0 md:right-[-18%] lg:right-[-8%] z-40 flex flex-col lg:gap-5 md:gap-2 con ${
          isAnimated ? "" : ""
        }`}
      >
        <div className="title mc2 lg:mt-44 md:mt-10">
          {data ? (
            <h4 className="lg:text-4xl md:text-[1.8rem] text-wrap tracking-wide capitalize mt-20 text-white text-opacity-80 w-3/4">
              {bgImageDescription.title || data?.results[rand]?.title}
            </h4>
          ) : (
            <div className="w-[20rem] h-[3rem]  blinker mt-20 rounded"></div>
          )}
        </div>
        <div className="info-home-page flex  items-center">
          {data ? (
            <p className="text-white text-opacity-75 md:text-sm">
              {dayjs(
                bgImageDescription.releaseDate ||
                  data?.results[rand]?.release_date
              ).format("MMM D, YYYY")}
            </p>
          ) : (
            <div className="w-[6rem] h-6 blinker rounded"></div>
          )}
          <div className="mx-3 flex justify-center items-center ">
            <p className={`points ${data ? " blinker " : ""}`}></p>
          </div>

          {data ? (
            <p className="text-white text-opacity-75">
              language{" "}
              {bgImageDescription.ogl || data?.results[rand]?.original_language}
            </p>
          ) : (
            <div className="w-[6rem] h-[1.5rem] blinker rounded"></div>
          )}

          <div className="mx-3 flex justify-center items-center ">
            <p className="points"></p>
          </div>
          {data ? (
            <p className="text-white text-opacity-70 rated-home-hero rounded-2xl px-4">
              U/A 16+
            </p>
          ) : (
            <div className="w-[4rem] h-[1.5rem] blinker rounded"></div>
          )}
        </div>
        <div className="aboutMovie" ref={overview}>
          {data ? (
            <p className="text-white text-sm text-wrap lg:w-3/4 md:w-[60%] tracking-wide text-opacity-60">
              {truncted(
                bgImageDescription.overview || data?.results[2]?.overview
              )}
            </p>
          ) : (
            <div className="flex flex-col gap-2">
              <p className="w-1/2 h-[1rem] blinker"></p>
              <p className="w-1/2 h-[1rem] blinker"></p>
              <p className="w-1/4 h-[1rem] blinker"></p>
            </div>
          )}
        </div>
        {data ? (
          <div className="genres flex gap-3">
            {bgImageDescription?.genre_ids?.map((item) => (
              <p className="text-white">{genres[item].name}</p>
            ))}
          </div>
        ) : (
          <div className="w-1/2 flex gap-2">
            <p className="w-1/4 h-[1rem] blinker"></p>
            <p className="w-1/4  h-[1rem] blinker"></p>
            <p className="w-1/4  h-[1rem] blinker"></p>
          </div>
        )}
        {data ? (
          <div className="buttonToWatch flex gap-9 mt-4">
            <button
              className=" py-2 px-6 rounded-xl tracking-tighter text-white cmn-call-to-action-btn font-bold"
              onClick={() =>
                navigate(`/${bgImageDescription?.media_type}/${bgImageDescription?.boxId}`)
              }
            >
              <i className="ri-play-fill font-bold text-xl text-white"></i>
              watch now
            </button>
            <button className=" py-2 px-3 rounded-xl text-sm  cmn-call-2  tracking-tighter">
              +
            </button>
          </div>
        ) : (
          <div className="flex ">
            <div className="w-[35%] h-[3rem] blinker rounded-lg"></div>
            <div className="ml-[10%] w-[3rem] h-[3rem] blinker rounded-lg">
              {" "}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default HeroMovieDesc;
