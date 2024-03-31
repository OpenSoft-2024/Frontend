import React, { useContext } from "react";
import l1 from "../assets/l1.jpg";
import c5 from "../assets/c5.jpg";
import { useState, useEffect } from "react";
import TopRatedFlex from "../HeorSectionComponents/TopRated/TopRatedFlex";
import MovieGridForMoviePlayback from "./MovieGridForMoviePlayback";
import MovieGrid from "../HeorSectionComponents/movieGrid";
import useFetch from "../custumHooks/useFetch";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { config } from "../utils/config";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
import { setIsNavBarVisible, setIsFooterVisible } from "../AppStore/AppSlicer";
import { IoStar } from "react-icons/io5";

function MoviePlayback() {
  const trunct = (str) => {
    if (str?.length < 260) {
      return str;
    } else {
      return str?.slice(0, 260) + "...";
    }
  };
  const dispatch = useDispatch();

  const [data, setData] = useState();
  let { movie_id } = useParams();
  useEffect(() => {
    axios
      .get(`${config.BASE_URL}/movies/id/${movie_id}`)
      .then((res) => {
        setData(res.data);
        console.log(data);
        // console.log(userDetails.favorites)
      })
      .catch((err) => {
        toast.error("Something went wrong");
        console.error(err);
      });
  }, [movie_id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(setIsNavBarVisible(true));
  }, []);
  useEffect(() => {
    dispatch(setIsFooterVisible(false));
  }, []);

  return (
    <div className="relative">
      <div className="flex pt-[10%] pl-[10%] pb-20 justify-between ">
        {data ? (
          <div className=" p-4 mt-10 detailimg absolute  rounded-lg ">
            <img
              src={data?.poster}
              className=" object-cover w-full h-full  rounded "
              alt=""
            />
          </div>
        ) : (
          <div className="p-4 mt-10 detload blinker absolute  rounded-lg h-[50rem]"></div>
        )}
        {/* <div className="overlay-04 absolute"></div>
        <div className="overlay-05 absolute"></div> */}
        {/* <div className="overlay-06 absolute w-full h-full"></div> */}
        <div className="  flex flex-col gap-2   ml-[34rem]  ">
          {data?.title ? (
            <h1 className="text-[#d0cfcf] text-[2.3vw] w-3/4  mt-28">
              {data?.title}
            </h1>
          ) : (
            <h1 className=" mt-28 w-[80%]  rounded-lg h-[4rem] blinker"></h1>
          )}
          <div className="flex items-center gap-4 mt-2">
            {data ? (
              <span className="text-white inline-block">
                {dayjs(data?.released).format("MMM D, YYYY")}
              </span>
            ) : (
              <span className="blinker w-[6rem] h-[1.3rem] rounded"></span>
            )}
            <span className="w-2 h-2 rounded-full bg-[white] inline-block text-[#dddbdb]"></span>
            {data ? (
              <span className="text-white inline-block">
                {data.languages[0]}
              </span>
            ) : (
              <span className="blinker w-[6rem] rounded h-[1.3rem]"></span>
            )}
            <span className="inline-block w-2 h-2 rounded-full bg-white">
              {" "}
            </span>
            {data ? (
              <span className="P-6  px-4 inline-block rounded-lg bg-[#89838379] text-white ">
                UA/+7
              </span>
            ) : (
              <span className="blinker w-[4rem] h-[1.2rem] rounded"></span>
            )}
          </div>
          {data ? (
            <p className="text-[white] mt-8 w-[75%]">{trunct(data?.plot)}</p>
          ) : (
            <div className="flex flex-col mt-8 gap-3">
              <p className="w-[150%] blinker h-[1.4rem]"></p>
              <p className="w-[100%] blinker h-[1.4rem]"></p>
              <p className="w-[70%] blinker h-[1.4rem]"></p>
            </div>
          )}
          {data ? (
            <p className="text-[#d6d6d6] flex gap-3 mt-4  items-center ">
              {data?.genres?.map((item) => (
                <span>{item}</span>
              ))}
              <p className="flex items-center gap-2 py-2 px-2 bg-[#56565670] rounded-xl">
                <IoStar className="text-[#f9c04f] ml-4" />
                <p> {data?.imdb?.rating}/10</p>
                <p>IMDB</p>
              </p>
            </p>
          ) : (
            <p className="flex gap-4">
              <span className="w-[20%] h-4 blinker rounded "></span>
              <span className="w-[20%] h-4 blinker rounded"></span>
            </p>
          )}
          {data ? (
            <div className="mt-8 items-center  flex gap-6">
              <Link to="/video">
                {" "}
                <button className="py-5 px-32 bg-[#f8f8f8] inline-block hover:scale-[1.07] smt rounded text-black font-bold">
                  PLAY
                </button>
              </Link>
              <button className="text-white py-4 px-7 rounded inline-block hover:scale-[1.06] smt bg-[#9491913d] text-3xl">
                +
              </button>
            </div>
          ) : (
            <div className="mt-8 flex gap-6">
              <div className="w-[80%] blinker h-[4rem] rounded-lg"></div>
              <div className="w-[30%] blinker h-[4rem] rounded-lg"></div>
            </div>
          )}
          <div className="genres"></div>
        </div>
      </div>

      <TopRatedFlex
        label={"More Like This"}
        endPoint={"/trending/movie/week"}
      ></TopRatedFlex>
      {/* <MovieGrid label={"because you watch madam web"}></MovieGrid> */}
    </div>
  );
}

export default MoviePlayback;
