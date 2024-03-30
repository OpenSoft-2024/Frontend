import { useState, useEffect } from "react";
import MovieGrid from "../HeorSectionComponents/movieGrid";
import ContinueToWatch from "../HeorSectionComponents/ContinueToWatch";
import BackgroundImage from "../LandingPageBackgroundImageContext/context";
import HeroMovieDesc from "../HeorSectionComponents/heroMovieDesc";
import TrendingMovieGrid from "../HeorSectionComponents/TrendingMovieGrid";

import { fetchDataFromApi } from "../DataUtils/fetchData2";
import { useDispatch, useSelector } from "react-redux";
import { getUrl, getGenres } from "../AppStore/AppSlicer";
import useFetch from "../custumHooks/useFetch";
import axios from "axios";
import { config } from "../utils/config";
import { setIsNavBarVisible } from "../AppStore/AppSlicer";
import { toast } from "react-toastify";

function Herosection() {
  let { url, rand } = useSelector((state) => state.AppSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsNavBarVisible(true));
  }, []);

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
  useEffect(() => {
    localStorage.setItem("url", JSON.stringify(url));
  }, [url]);

  // console.log(JSON.parse(localStorage.getItem("url")));
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


  const [movies, setMovies] = useState({});
  
  const languages = ['English', 'German'];
  const genres = ['Action', 'Romance', 'Comedy'];

  const getMoviesByLanguage = async (language) => {
    try {
      const res = await axios.post(`${config.BASE_URL}/movies/language`, {
        language,
      });
      setMovies((prev) => ({ ...prev, [language]: res.data }));

    } catch (err) {
      toast.error('Something went wrong');
      console.log(err);
    }
  }

  const getMoviesByGenre = async (genre) => {
    try {
      const res = await axios.post(`${config.BASE_URL}/movies/genres`, {
        genre,
      });
      setMovies((prev) => ({ ...prev, [genre]: res.data }));

    } catch (err) {
      toast.error('Something went wrong');
      console.log(err);
    }
  }

  useEffect(() => {

    const getMovies = async () => {

      try{
        const res = await axios.get(`${config.BASE_URL}/movies/latest`);
        setMovies((prev) => ({ ...prev, 'latest': res.data }));
      }
      catch(err) {
        toast.error('Something went wrong');
        console.log(err);
      }
        
      for(let language of languages) {
        await getMoviesByLanguage(language);
      }

      for(let genre of genres) {
        await getMoviesByGenre(genre);
      }
    }
     
    getMovies();
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
      <div className="w-screen overflow-x-hidden">
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
            <MovieGrid data={movies['latest']} label="Latest" />
            <MovieGrid data={movies['English']} label="English" />
            <MovieGrid data={movies['German']} label="German" />
            <MovieGrid data={movies['Action']} label="Action" />
            <MovieGrid data={movies['Romance']} label="Romance" />
            <MovieGrid data={movies['Comedy']} label="Comedy" />
          </div>
        </div>
      </div>
    </BackgroundImage.Provider>
  );
}

export default Herosection;
