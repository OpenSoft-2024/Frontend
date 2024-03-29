import React from "react";
import avtar from "../assets/avt.webp";
import Img from "../lazyLoading/Img";
import DetailOnHover from "../components/detailOnHovering";
import { useNavigate } from "react-router-dom";

function MovieCard({ img, img2, about, date, genres, item }) {
  
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
      <DetailOnHover
        img={img}
        about={about}
        date={date}
        style={"top-[3%] "}
        genres={genres}
        item={item}
      />
    </div>
  );
}

export default MovieCard;
