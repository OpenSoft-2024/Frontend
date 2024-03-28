import React, { useState } from "react";
import Img from "../lazyLoading/Img";
import DetailOnHover from "./detailOnHovering";

function SearchPageMovieCard({ img, img2, about,date,style}) {
  let [showOnHover, setShowOnHover] = useState(false);
  const handleOnHover = () => {
    setTimeout(() => {
      setShowOnHover(true);
    }, 1000);
  };
  const handleOnLeave = () => {
    setTimeout(() => {
      setShowOnHover(false);
    });
  };

  return (
    <div
      className={`rounded searchPgec giveMeTrans group relative  `}
      onMouseEnter={handleOnHover}
      onMouseLeave={handleOnLeave}
    >
      {img ? <Img src={img} alt="" className={`w-full h-full  ${style}`}  /> : ""}
      <DetailOnHover img={img2}  about={about} date={date}/>
    </div>
  );
}

export default SearchPageMovieCard;
