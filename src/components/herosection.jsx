import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import MovieGrid from "../HeorSectionComponents/movieGrid";
import ContinueToWatch from "../HeorSectionComponents/ContinueToWatch";
import BackgroundImage from "../LandingPageBackgroundImageContext/context";
import HeroMovieDesc from "../HeorSectionComponents/heroMovieDesc";
import TrendingMovieGrid from "../HeorSectionComponents/TrendingMovieGrid";

import { useEffect } from "react";
import { fetchDataFromApi } from "../DataUtils/fetchData2";
import { useDispatch, useSelector } from "react-redux";
import { getUrl, getGenres } from "../AppStore/AppSlicer";
import TopRatedFlex from "../HeorSectionComponents/TopRated/TopRatedFlex";
import useFetch from "../custumHooks/useFetch";
import axios from "axios";
import { config } from "../utils/config";
import { login } from "../AppStore/userSlice";

function Herosection() {

  const dispatch = useDispatch();
   
  useEffect(() => {
    setUser();
  }, []);
  
  const setUser = async () => {

    const token = localStorage.getItem("token");
    if(!token){
      return;
    }
    
    try{
  
      const res = await axios.get(`${config.BASE_URL}/users/profile`,{headers:{Authorization:token}});
      dispatch(login(res.data.user));
    }
    catch(err){
      console.log(err);
    }
    
  }

  /////o
  let { url, rand } = useSelector((state) => state.AppSlice);
  console.log(url);

  ///////////  IMAGE BASE URL FETCHING //////////////////////////////////
  const fetchApiConfiguration = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getUrl(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    console.log(data);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };
  useEffect(() => {
    fetchApiConfiguration();
    genresCall();
  }, []);

  const [data, setData] = useState(null);
  const { heroImg, isLoading, error } = useFetch("/movie/upcoming");
  useEffect(() => {
    setData(heroImg);
    localStorage.setItem("def", url?.poster + data?.results[0].backdrop_path);
    // setBgImage(localStorage.getItem('def'))
  }, [heroImg]);

  let [bgImage, setBgImage] = useState({
    img: url?.backdrop + data?.results[0].backdrop_path,
    id: "",
  });
  let [bgImageDescription, setBgImageDescription] = useState({
    // title:"",
    // releaseDate:"",
    // overview:"",
  });

  const [imgRef] = useAutoAnimate();
  return (
    <BackgroundImage.Provider
      value={{ bgImage, setBgImage, bgImageDescription, setBgImageDescription }}
    >
      <div className="w-screen overflow-x-hidden ">
        <div className="hero-image-section w-[100vw] h-[100vh]">
          <img
            src={
              bgImage.img || url?.backdrop + data?.results[rand].backdrop_path
            }
            className="fixed w-screen "
            alt=""
          />
          {/* <div className={`overlayComplete w-full h-3/4  z-20 absolute `}></div> */}
          <div className="overlay-1 w-[100vw]"></div>
          <div className="overlay-01"></div>
          <div className="overlay-02"></div>
          <HeroMovieDesc />
        </div>

        <div className="  bg-[black] w-[110vw]">
          <div className="contnueWatching   ">
            <div className="continuToWatchMovie">
              <ContinueToWatch label="latest Relaease" />
            </div>
          </div>
          <div className="trendingMovie">
            <TrendingMovieGrid label="Top 20 movies " type={"movie"} />
          </div>

          <div className="pl-6 mt-20">
            <MovieGrid label="latest" />
            <TopRatedFlex endPoint={"/movie/top_rated"} label={"Top Rated"} />
            <MovieGrid label="Newly relased movies" />
            <MovieGrid label="Because you watch batman" />
          </div>
          <div className="trendingMovie">
            <TrendingMovieGrid label="Top 20 TV-SHOWS" type={"tv"} />
          </div>
        </div>
      </div>
    </BackgroundImage.Provider>
  );
}

export default Herosection;
