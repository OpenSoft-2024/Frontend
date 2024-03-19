import React from "react";

function TrendingMovieCard({ trendingCount, img }) {
  return (
    <div className="relative cursor-pointer">
      <div className="trending-img w-40 h-52 rounded-sm  overflow-hidden">
        {/* <div className="w-full h-full img-overlay"></div> */}
        <img src={img} alt="" className="w-full h-full   object-cover" />
      </div>
      <div className="trending-count  absolute top-0 ">
        <p className="text-white text-4xl trendingNumber"> {trendingCount}</p>
      </div>
    </div>
  );
}
export default TrendingMovieCard;
