import React from "react";
import avtar from "../assets/avt.webp";
import Img from "../lazyLoading/Img";

function MovieCard({ img }) {
  return (
    <div className="mt-4 rounded-3xl relative h-96  w-fit">
      <h1>vishal</h1>
      <div className="  rounded overflow-hidden border-black movie-box-movie-grid    relative  detailOnHover   ">
        <img
          src={img}
          className="w-full h-full object-cover box-shadow rounded-sm absolute movie-card-o3jiue"
        />
        <p className="absolute text-white w-full text-wrap     ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
          laboriosam exercitationem expedita reiciendis iusto cupiditate placeat
          nisi fugit odit facere.
        </p>
      </div>
    </div>
  );
}

export default MovieCard;