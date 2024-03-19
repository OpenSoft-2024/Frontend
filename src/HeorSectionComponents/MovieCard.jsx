import React from "react";
import avtar from "../assets/avt.webp";

function MovieCard({img}) {
  return (
    <div className="mt-4  rounded-3xl">
      <div className="w-44 h-60 rounded overflow-hidden border-black">
        <img src={avtar} alt="" className="w-full h-full object-cover" />
      </div>
      
    </div>
  );
}

export default MovieCard;
