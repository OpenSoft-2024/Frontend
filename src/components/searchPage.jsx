import React from "react";

import SearchPageMovieCard from "./searchPageMovieCard";
import useFetch from "../custumHooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { RiHome3Line } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import { setIsNavBarVisible } from "../AppStore/AppSlicer";
// import { useHistory } from 'react-router-dom';
import { NavLink, useNavigate } from "react-router-dom";
import { FaImage } from "react-icons/fa6";
import BackgroundColor from "../LandingPageBackgroundImageContext/context2";
import { config } from "../utils/config";
import axios from "axios";
import { MdOutlineDescription } from "react-icons/md";

function SearchPage() {
  let dispatch = useDispatch();
  const [data, setData] = useState([]);
  const { url, rand, isNavBarVisible } = useSelector((state) => state.AppSlice);
  // console.log(url);
  const [isPlot, setIsPlot] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [query, setQuery] = useState("");
  const [srchData, setsrchData] = useState([]);
  const [srchHistData, setsrchHistData] = useState([]);
  const navigate = useNavigate();
  const imageref = useRef();

  // console.log(heroImg);
  const [typingTimeout, setTypingTimeout] = useState(null);

  const queryCheck = (qu) => {
    const regex = /[^a-zA-Z0-9\s]/g;
    const cleanedString = qu.replace(regex, "");
    return cleanedString;
  };
  const token=localStorage.getItem('token')

  const getsearch_hist=async()=>{
    
    if(!token)
    setsrchData([])
  else{
    const res=await axios.get(`${config.BASE_URL}/search_hist`,{
      headers:{
        Authorization:token
      }
    })
    console.log(res);
    setsrchHistData(res?.data?.history)
   

  }
 

  }

  useEffect(() => {
    
    if (query.trim() == "") {
     getsearch_hist();
     setsrchData([])

    }
  }, [query]);

  useEffect(() => {
    dispatch(setIsNavBarVisible(false));
  }, []);

  let [active, setActive] = useState(false);
  const { heroImg, isLoading, error } = useFetch(
    `/trending/all/day?page=${rand}`
  );
  useEffect(() => {
    setData(heroImg?.results);
  }, [heroImg]);

  const handleOnScroll = (e) => {
    if (window.scrollY > 230) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  window.addEventListener("scroll", handleOnScroll);

  const handleOnClick = (e) => {
    console.log(e);
    dispatch(setIsNavBarVisible(true));
  };
  const handlePlot = () => {
    setIsPlot(!isPlot);
    console.log(isPlot);
  };
  // const [imageUrl, setImageUrl] = useState("");

  const handleChange = (e) => {
    const q = e.target.value;
    setQuery(q);
    clearTimeout(typingTimeout);
    if (q.trim() !== "") {
      setTypingTimeout(setTimeout(() => handleAutocomplete(q), 1000));
    }
  };
  const handlekey = (e) => {
    if (e.keyCode == 13) {
      console.log("enter");
      handleSubmit();
    }
  };

  const handleImageInputChange = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    if (!file) return;

    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    reader.onerror = (error) => {
      console.error("Error reading file:", error);
    };

    if (file) {
      // setImageUrl(reader.readAsDataURL(file))
      console.log(reader.readAsDataURL(file));
    }

    // console.log(selectedImage);
  };

  const handleIconClick = () => {
    imageref.current.click();
  };
  const handleSubmit = async () => {
    try{
      const url = isPlot
      ? `${config.BASE_URL}/search/plot`
      : `${config.BASE_URL}/search/`;
    const q = queryCheck(query);
    console.log(q);
    const result = await axios.get(`${url}`, {
      params: {
        query: q,
      },
    });
    if(token)
    {
      const res=await axios.post(`${config.BASE_URL}/search_hist`,{
      query:query
    },{
      headers:{
        Authorization:token
      }
    })
    console.log(res);

    }
    setData(result.data);
    setQuery("");
    
  }
  catch(err)
  {
    console.log(err);
  }
    // console.log(result);
    
  };

  const handleAutocomplete = async (quer) => {
    try{
      const url = isPlot
      ? `${config.BASE_URL}/search/plot`
      : `${config.BASE_URL}/search/`;
    // console.log(quer);
    const q = queryCheck(quer);
    console.log(q);
    const result = await axios.get(`${url}`, {
      params: {
        query: q,
      },
    });
    console.log(result);
    setsrchData(result.data);

    }
    catch(err)
    {
      console.log(err);
    }
   

    // setQuery("");
  };

  return (
    <div
      className={`bg-[#050404] w-screen min-h-[100vh] relative overflow-hidden  `}
    >
      <div
        className={`w-screen   pt-10   ${
          active ? "color" : ""
        } flex justify-between`}
      >
        {/* <input
          type="search"
          placeholder="Search for movie or tv shows "
          className=" pl-14  ml-[2.4%] w-[70%] h-[3.3rem] rounded-lg text-white text-opacity-[0.8] text-xl   outline-none bg-[#3c3c3c]    placeholder:text-xl capitalize"
        /> */}
        <div className=" flex w-full justify-center items-center flex-row">
          <svg
            className=" w-[1.9rem] absolute top-[50px] left-[200px]    test-white fill-white cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={handleSubmit}
            fill="currentColor"
          >
            <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
          </svg>
          <div className="flex flex-col w-[80%] relative justify-center items-center">
            <div className="flex relative w-full flex-rowm justify-center items-center">
              <input
                type="search"
                placeholder="Search for movie or tv shows"
                onKeyUp={handlekey}
                onChange={handleChange}
                value={query}
                autocomplete="off"
                className="pl-14 w-[80%]  justify-center h-[3.3rem] rounded-lg text-white text-opacity-[0.8] text-xl outline-none bg-[#3c3c3c] placeholder:text-xl capitalize"
                id="searchInput"
              />
              <div className="flex flex-row justify-center items-center">
                <span
                  htmlFor="imageInput"
                  className="text-white absolute  translate-x-[-100px]"
                  onClick={handleIconClick}
                >
                  <FaImage />
                </span>
                <input
                  ref={imageref}
                  id="imageInput"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageInputChange}
                />
                <span
                  class="text-white absolute translate-x-[-40px] cursor-pointer p-2 rounded-sm font-semibold"
                  style={
                    isPlot
                      ? { backgroundColor: "red", color: "black" }
                      : { backgroundColor: "black", color: "white" }
                  }
                  // style={{position: "absolute", right: "40px", top: "50%", transform: "translateY(-50%)", cursor: "pointer"}}
                  onClick={handlePlot}
                >
                  <MdOutlineDescription />
                </span>
              </div>
            </div>
            <div
              className=" relative w-full flex justify-center items-center rounded-lg "
              style={{}}
            >
              {srchData?.length > 0 ? (
                <ul
                  className="  w-[80%] inset-x-0 top-full  z-[2000]"
                  style={{ borderRadius: "15px" }}
                >
                  {srchData.map((item) => {
                    // console.log(item);
                    return (
                      <li
                        key={item._id}
                        className="px-4  py-2 bg-gray-600 text-white  hover:bg-red-700 cursor-pointer "
                        onClick={() => {
                          navigate(`/${item?._id}`);
                        }}
                      >
                        {item.title}
                      </li>
                    );
                  })}
                </ul>
              ):
              (
                srchHistData?.length > 0 && (
                  <ul
                    className="  w-[80%] inset-x-0 top-full  z-[2000]"
                    style={{ borderRadius: "15px" }}
                  >
                    {srchHistData.map((item,index) => {
                      // console.log(item);
                      return (
                        <li
                          key={index}
                          className="px-4  py-2 bg-gray-600 text-white  hover:bg-red-700 cursor-pointer "
                          onClick={() => {
                            setQuery(item)
                          }}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                )


              )
            }
            </div>
          </div>
        </div>
        <NavLink to="/" onClick={handleOnClick}>
          <div className="absolute bg-red-600 capitalize top-[2.8%] right-[3%] px-6 hover:scale-[1.05]  rounded py-2 text-white">
            home
          </div>
        </NavLink>
      </div>
      <div className="w-screen grid   sm:grid-cols-4 pt-20 md:grid-col-8 lg:grid-cols-6 max-lg:grid-cols-12 gap-4 px-20">
        {data?.map((item) =>
          item ? (
            <SearchPageMovieCard
              img={item.poster}
              img2={url?.poster + item.poster_path}
              about={item.overview}
              date={item.released}
              item={item}
            />
          ) : (
            <div className="w-[10rem]  blinker h-[25rem]"></div>
          )
        )}
      </div>
    </div>
  );
}

export default SearchPage;
