import React from "react";
import avtar from "../assets/t9.webp";
// /Users/kushal15/Desktop/Work/GC_OS/Frontend/src/assets/peakpx (9).jpg

function MovieCardHorizontal({img}) {
  return (
    <div className="mt-4 " style={{}}>
      <div className=" h-36 overflow-hidden border-black" style={{borderRadius:'12px', width:'16rem'}}>
        <img src={avtar} alt="" className="w-full h-full object-cover" />
      </div>
      
    </div>
  );
}

export default MovieCardHorizontal;
