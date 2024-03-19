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

function HeroMovieDesc() {
  // console.log(document.getElementsByClassName("description")[0]);
  //   let mycont = useRef(null);
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
  let [data, setData] = useState({
    movieTitle: "spider-man",
    movieSubtitle: "beyond the spiderverse",
    moviveDescription:
      "Spider-Man: Into the Spider-Verse, Miles Morales, a teenager from Brooklyn, discovers his own abilities after being  a  ",
    genres: ["action", "superHero", "animated", "sci-fi"],
  });
  return (
    <div
      ref={mycont}
      className={`description w-5/12 absolute right-0  z-40 flex flex-col gap-5 con ${
        isAnimated ? "animateOnChange" : ""
      }`}
    >
      <div className="title mt-44">
        {/* <div className="backdropImg">
       <img src={img} alt="" className="w-60 h-30" />
       </div> */}
        <h4 className="text-4xl text-wrap tracking-wide capitalize mt-1 text-white text-opacity-80 w-3/4">
          {bgImageDescription.title}
        </h4>
      </div>
      <div className="info-home-page flex  items-center">
        <p className="text-white text-opacity-75">
          {bgImageDescription.releaseDate}
        </p>
        <div className="mx-3 flex justify-center items-center ">
          <p className="points "></p>
        </div>
        <p className="text-white text-opacity-75">
          language {bgImageDescription.ogl}
        </p>
        <div className="mx-3 flex justify-center items-center ">
          <p className="points"></p>
        </div>
        <p className="text-white text-opacity-70 rated-home-hero rounded-2xl px-4">
          U/A 16+
        </p>
      </div>
      <div className="aboutMovie" ref={overview}>
        <p className="text-white text-sm text-wrap w-3/4 tracking-wide text-opacity-60">
          {bgImageDescription.overview}
        </p>
      </div>
      <div className="genres flex gap-3">
        {data.genres.map((item) => (
          <p className="capitalize text-white text-opacity-80">{item}</p>
        ))}
      </div>
      <div className="buttonToWatch flex gap-9 mt-4">
        <button className=" py-2 px-6 rounded-xl tracking-tighter text-white cmn-call-to-action-btn font-bold">
          <i className="ri-play-fill font-bold text-xl text-white"></i>
          watch now
        </button>
        <button className=" py-2 px-3 rounded-xl text-sm  cmn-call-2  tracking-tighter">
          +
        </button>
      </div>
    </div>
  );
}

export default HeroMovieDesc;
