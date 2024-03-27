import React, { useState } from "react";

function SearchPageMovieCard({ img }) {
  
  return (
    <div className="rounded overflow-hidden">
      <img src={img} alt="" className="w-full h-full" />
    </div>
  );
}

export default SearchPageMovieCard;
