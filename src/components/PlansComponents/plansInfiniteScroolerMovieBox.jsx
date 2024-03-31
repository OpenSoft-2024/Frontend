import React from "react";

function PlansInfiniteScroolerMovieBox({ img }) {
  return (
    <div>
      <div className="plan-movie-box">
        {img ? (
          <img src={img} alt="thisisimg" />
        ) : (
          <div className="w-[25rem] h-[15rem] bg-pink-600"></div>
        )}
      </div>
    </div>
  );
}

export default PlansInfiniteScroolerMovieBox;
