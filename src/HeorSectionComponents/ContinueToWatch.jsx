import React, { useContext, useEffect } from "react";
import ContinueToWatchMovieCard from "./ContinueToWatchMovieCard";

import useFetch from "../custumHooks/useFetch";
import { useSelector } from "react-redux";
import { useState } from "react";
import BackgroundImage from "../LandingPageBackgroundImageContext/context";
// import BackgroundImage from "../LandingPageBackgroundImageContext/context";
// import c7 from '../assets/c1.jpg'

function ContinueToWatch({ label }) {
  let { bgImage, setBgImage } = useContext(BackgroundImage);

  let counter = 0;

  const [data, setData] = useState(null);
  const { heroImg, isLoading, error } = useFetch("/movie/upcoming");
  // console.log(heroImg);
  const { url } = useSelector((state) => state.AppSlice);
  // console.log(url);
  // let def = url?.poster + data?.results[0].backdrop_path;

  useEffect(() => {
    setData(heroImg);
    localStorage.setItem("def", url?.poster + data?.results[0].backdrop_path);
    // setBgImage(localStorage.getItem('def'))
    counter++;
  }, [heroImg]);

  return (
    <div className="w-screen pl-10 mt-8  ">
      <div className="flex gap-4 pt-4 overflow-auto overflow-y-hidden contToWatch scroll-smooth pb-4">
        {data?.results.map((item, index) => {
          console.log(item.overview);
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
            />
          );
        })}
      </div>
    </div>
  );
}

export default ContinueToWatch;
