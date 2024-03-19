import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const Img = ({ src, className }) => {
  return (
    <LazyLoadImage
      className={className || ""}
      alt="vishal"
      effect="opacity"
      src={src}
    />
  );
};

export default Img;
