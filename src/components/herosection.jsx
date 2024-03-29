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
import useFetch from "../custumHooks/useFetch";
import axios from "axios";
import { config } from "../utils/config";
import { login } from "../AppStore/userSlice";
import { server } from "../../server";

function Herosection() {
  let { url, rand } = useSelector((state) => state.AppSlice);
  console.log(url);
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
  useEffect(() => {
    localStorage.setItem("url", JSON.stringify(url));
  }, [url]);
  console.log( JSON.parse(localStorage.getItem("url")));
  useEffect(() => {
    const myBoolean = JSON.parse(localStorage.getItem("url"));
    dispatch(getUrl(myBoolean));
  }, []);
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
  }, [heroImg]);

  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [data4, setData4] = useState(null);
  const [data5, setData5] = useState(null);
  const [data6, setData6] = useState(null);
  const [data7, setData7] = useState(null);
  // const [data8, setData8] = useState(null);
  const token=localStorage.getItem("token")
  useEffect(() => {
  
    const getfetch=async()=>{
      try{

        const res=await axios.get(`${server}/movies/latest`)
        console.log(res);
        setData1(res.data)

        // const res1=await axios.get(`${server}/movies/gethits`,{
        //   headers:token
        // })
        // // console.log(res);
        // setData2(res.data)

        const res2=await axios.post(`${server}/movies/language`,{
          language:"English"
        })
        // console.log(res2);
        setData3(res2.data)

        const res3=await axios.post(`${server}/movies/language`,{
          language:"Hindi"
        })
        console.log(res3);
        setData4(res3.data)

        const res4=await axios.post(`${server}/movies/genres`,{
          genre:"Action"
        })
        // console.log(res);
        setData5(res4.data)

        const res5=await axios.post(`${server}/movies/genres`,{
          genre:"Romance"
        })
        // console.log(res);
        setData6(res5.data)

        const res6=await axios.post(`${server}/movies/genres`,{
          genre:"Comedy"
        })
        // console.log(res);
        setData7(res6.data)
      }
      catch(err)
      {
        console.log(err);
      }
    }
   getfetch()
  }, []);

  let [bgImage, setBgImage] = useState({
    img: url?.backdrop + data?.results[0].backdrop_path,
    id: "",
  });
  let [bgImageDescription, setBgImageDescription] = useState({
    // title:"",
    // releaseDate:"",
    // overview:"",
  });

  
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
          
          <div className="overlay-1 w-[100vw]"></div>
          <div className="overlay-01"></div>
          <div className="overlay-02"></div>
          <HeroMovieDesc />
        </div>

        <div className="bg-[black] w-[110vw] mc1">
          <div className="contnueWatching">
            <div className="continuToWatchMovie">
              <ContinueToWatch label="latest Relaease" />
            </div>
          </div>
          <div className="trendingMovie">
            <TrendingMovieGrid label="Top 20 movies " type={"movie"} />
          </div>

          <div className="pl-6 mt-20">
            <MovieGrid data={data1} label="Latest" />
            <MovieGrid data={data3} label="English" />
            <MovieGrid data={data4} label="Hindi" />
            <MovieGrid data={data5} label="Action" />
            <MovieGrid data={data6} label="Romance" />
            <MovieGrid data={data7} label="Comedy" />
          </div>
        </div>
      </div>
    </BackgroundImage.Provider>
  );
}

export default Herosection;
