import React, { useRef } from "react";
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
import axios from "axios";
import { server } from "../../server";

function TrendingMovieGrid({ label, type }) {
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

  const [data, setData] = useState(null);
  // const { heroImg, isLoading, error } = useFetch(`/trending/${type}/day`);

  useEffect( ()=>{
    const getdata=async()=>{
      try{
        const res=await axios.get(`${server}/movies/gethits`)
        // console.log(res);
      setData(res.data)
      }
      catch(err)
      {
        console.log(err);
      }
      
    }
    getdata()

  },[])
  // console.log(heroImg);
  // const { url } = useSelector((state) => state.AppSlice);
  // console.log(url);
  // setBgImage(url?.poster + data?.results[0].backdrop_path);
  // useEffect(() => {
  //   setData(heroImg);
  // });
  let itTrending = 0;
  const trendingAray = [t1, t2, t3, t4, t5, t6, t7, t8];
  return (
    <div className="w-screen flex flex-col pl-8 mt-14 mb-2  overflow-x-hidden trending-movie-grid  overflow-y-hidden  ">
      <h1 className="text-white text-xl text-opacity-55">{label}</h1>
      <div className="box-overlay2 absolute   text-white  group ">
        <i
          className="ri-arrow-right-circle-fill text-white relative top-42  text-2xl  invisible group-hover:visible opacity-65 hover:opacity-100"
          onClick={() => navigation("right")}
        ></i>
      </div>
      <div className="box-overlay1 absolute   text-white group">
        <i
          className="ri-arrow-left-circle-fill text-white relative top-[50%] left-0 text-2xl invisible group-hover:visible opacity-65 hover:opacity-100"
          onClick={() => navigation("left")}
        ></i>
      </div>
      {data ? (
        <div className="trending-movie-grid flex gap-10 overflow-y-hidden py-4 pl-8">
          {data?.map((item) => {
            return (
              <TrendingMovieCard
                key={item._id}
                img={item.poster}
                trendingCount={++itTrending}
                about={item.overview}
                date={item.release_date}
              />
            );
          })}
        </div>
      ) : (
        <div className="  justify-between flex trending-movie-grid mt-4">
          {trendingAray.map((item) => (
            <div className="w-[13rem] h-[11rem] blinker ml-4 rounded-lg"></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TrendingMovieGrid;
