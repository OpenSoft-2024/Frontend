import React from "react";
import TrendingMovieCard from "./TrendingMovieCard";
import { useEffect } from "react";
import { useState } from "react";
import t1 from "../assets/t1.webp";
import t2 from "../assets/t2.webp";
import t3 from "../assets/t3.webp";
import t4 from "../assets/t4.webp";
import t5 from "../assets/t5.webp";
import t6 from "../assets/t6.webp";
import t7 from "../assets/t7.webp";
import t8 from "../assets/t8.webp";
import t9 from "../assets/t9.webp";
import useFetch from "../custumHooks/useFetch";
import { useSelector } from "react-redux";
import t10 from "../assets/t10.webp";

function TrendingMovieGrid({ label, type }) {
  const [data, setData] = useState(null);
  const { heroImg, isLoading, error } = useFetch(`/trending/${type}/day`);
  console.log(heroImg);
  const { url } = useSelector((state) => state.AppSlice);
  console.log(url);
  // setBgImage(url?.poster + data?.results[0].backdrop_path);
  useEffect(() => {
    setData(heroImg);
  });
  let itTrending = 0;
  const trendingAray = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10];
  return (
    <div className="w-screen flex flex-col pl-8 mt-14 mb-2  overflow-x-auto  trending-movie-grid  overflow-y-hidden  ">
      <h1 className="text-white text-xl text-opacity-55">{label}</h1>

      <div className="trending-movie-grid flex gap-10 overflow-y-hidden py-4 pl-8">
        {data?.results.map((item) => {
          return (
            <TrendingMovieCard
              key={item.id}
              img={url.poster + item.backdrop_path}
              trendingCount={++itTrending}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TrendingMovieGrid;
