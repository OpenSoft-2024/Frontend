import React, { useEffect } from "react";
// import rrr from '../assets/rrr.jpg'
import { useContext } from "react";
import BackgroundImage from "../LandingPageBackgroundImageContext/context";
import { useState } from "react";
import Img from "../lazyLoading/Img";

function ContinueToWatchMovieCard({
  img,
  title,
  overview,
  releasedate,
  boxId,
  ogl,
}) {
  let [active, setActive] = useState(false);
  let { setBgImage, setBgImageDescription, bgImage } =
    useContext(BackgroundImage);

  let handleOnClick = () => {
    setBgImage(img);
    setTimeout(() => {
      setBgImageDescription({
        title: title,
        releaseDate: releasedate,
        overview: overview,
        ogl: ogl,
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
    <div onClick={handleOnClick} id={boxId}>
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
