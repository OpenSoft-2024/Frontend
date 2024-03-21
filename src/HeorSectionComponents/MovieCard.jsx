import React from "react";
import avtar from "../assets/c1.jpg";

function MovieCard({img}) {
  return (
    <div className="mt-4 " style={{}}>
      <div className=" h-60 overflow-hidden border-black" style={{borderRadius:'12px', width:'11rem'}}>
        <img src={avtar} alt="" className="w-full h-full object-cover" />
      </div>
      
    </div>
  );
}

export default MovieCard;
