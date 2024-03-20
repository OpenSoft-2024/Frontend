import React from "react";
import avtar from "../assets/avt.webp";
import Img from "../lazyLoading/Img";

function MovieCard({ img }) {
  return (
    <div className="mt-4 rounded-3xl ">
      <div className="w-40 h-60 rounded overflow-hidden border-black movie-box-movie-grid   box-shadow">
        <Img src={img} className="w-full h-full object-cover box-shadow" />
      </div>
    </div>
  );
}

export default MovieCard;
