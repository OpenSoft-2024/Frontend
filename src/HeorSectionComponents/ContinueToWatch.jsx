import React, { useContext, useEffect } from "react";
import ContinueToWatchMovieCard from "./ContinueToWatchMovieCard";

import useFetch from "../custumHooks/useFetch";
import { useSelector } from "react-redux";
import { useState } from "react";
import ContinueToWatchMovieSkelton from "../loadingSkelton/contLoadSk";
import BackgroundImage from "../LandingPageBackgroundImageContext/context";

// import ContinueToWatchMovieSkelton from "../loadingSkelton/ContinueToWatchLoadingSkelton";
// import BackgroundImage from "../LandingPageBackgroundImageContext/context";
// import c7 from '../assets/c1.jpg'

function ContinueToWatch({ label }) {
  let { bgImage, setBgImage } = useContext(BackgroundImage);

  let counter = 0;
  const { url, rand } = useSelector((state) => state.AppSlice);

  const [data, setData] = useState(null);
  const { heroImg, isLoading, error } = useFetch(
    `/movie/upcoming?page=${rand}`
  );
  // console.log(heroImg);

  // console.log(url);
  // let def = url?.poster + data?.results[0].backdrop_path;

  useEffect(() => {
    setData(heroImg);
    localStorage.setItem("def", url?.poster + data?.results[0].backdrop_path);
    // setBgImage(localStorage.getItem('def'))
    counter++;
  }, [heroImg]);
  let randInt = Math.floor(Math.random() * 21);
  return (
    <div className="w-screen pl-10 mt-8 relative ">
      {/* <i
        class=" i1 ri-arrow-right-circle-line text-white  absolute top-28 text-3xl h-full  cursor-pointer  "
        onClick={() => navigation("right")}
      ></i>
      <i
        class=" i2 ri-arrow-left-circle-line text-white  absolute top-28 right-10 text-3xl h-full  cursor-pointer  "
        onClick={() => navigation("left")}
      ></i> */}
      <div className="flex gap-4 pt-4 overflow-auto overflow-y-hidden contToWatch scroll-smooth pb-4 h-full justify-between">
        {!data ? (
          <ContinueToWatchMovieSkelton></ContinueToWatchMovieSkelton>
        ) : (
          data.results.map((item, index) => {
            // console.log(item.overview);
            if (index > 6) return;

            return (
              <ContinueToWatchMovieCard
                key={item.backdrop_path}
                img={url?.poster + item.backdrop_path}
                title={item.title}
                overview={item.overview}
                releasedate={item.release_date}
                boxId={item.id}
                ogl={item.original_language}
                genre_ids={item.genre_ids}
                media_type={"movie"}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default ContinueToWatch;
