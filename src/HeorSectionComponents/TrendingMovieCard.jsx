import React from "react";
import Img from "../lazyLoading/Img";
import DetailOnHover from "../components/detailOnHovering";

function TrendingMovieCard({ trendingCount, img, img2, about, date }) {
  return (
    <div className="relative cursor-pointer">
      <div className="trending-img w-[20rem]   rounded-sm  overflow-hidden">
        {/* <div className="w-full h-full img-overlay"></div> */}
        <Img
          src={img}
          alt=""
          className="w-full h-full  trendingImage-cont  object-cover"
        />
      </div>
      <div className="trending-count  absolute top-0 ">
        <p className="text-white text-lg trendingNumber   "> {trendingCount}</p>
      </div>
      <DetailOnHover img={img2} about={about} date={date} style={"top-[-2%]"} />
    </div>
  );
}
export default TrendingMovieCard;
