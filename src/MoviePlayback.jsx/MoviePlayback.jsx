import React from "react";
import l1 from "../assets/l1.jpg";

function MoviePlayback() {
  return (
    <div className="relative">
      <div className="w-screen ">
        <img src={l1} alt="" />
      </div>
      <div className="overlay-04 absolute"></div>
      <div>
        <h1></h1>

        <p></p>
        <div className="genres"></div>
      </div>
    </div>
  );
}

export default MoviePlayback;
