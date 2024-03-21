import React, { useEffect } from "react";
// import rrr from '../assets/rrr.jpg'
import { useContext } from "react";
import BackgroundImage from "../LandingPageBackgroundImageContext/context";
import { useState } from "react";
import Img from "../lazyLoading/Img";
import { useRef } from "react";

function ContinueToWatchMovieCard({
  img,
  title,
  overview,
  releasedate,
  boxId,
  ogl,
  genre_ids

}) {
  // const [check, setCheck] = useState(false);
  // const [style, setStyle] = useState(null);
  const cont= useRef(null);
  let [active, setActive] = useState(false);
  let { setBgImage, setBgImageDescription, bgImage } =
    useContext(BackgroundImage);

  let handleOnClick = () => {
    setBgImage({ img, id: boxId });
    // cont.current.style = "border:1px solid white;";
    console.log(cont)

    setTimeout(() => {
      setBgImageDescription({
        title: title,
        releaseDate: releasedate,
        overview: overview,
        ogl: ogl,
        genre_ids:genre_ids


      });
    }, 100);
  };

  // useState(() => {
  //   if (bgImage.boxId === boxId) {
  //     setActive(true);
  //   } else {
  //     setActive(false);
  //   }
  // }, [bgImage]);
  return (
    <div onClick={handleOnClick} id={boxId} ref={cont}>
      <div
        className={`cont-movie-card rounded-lg overflow-hidden hover:scale-110 cursor-pointer  h-full`}
      >
        <div className="vishal w-full h-full rounded">
          <Img src={img} className="w-full  h-full img-cont" />
        </div>
      </div>
    </div>
  );
}

export default ContinueToWatchMovieCard;
