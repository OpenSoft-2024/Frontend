import { easeIn, motion } from "framer-motion";
import React from "react";
import dayjs from "dayjs";

function DetailOnHoverForTopRated({ img, about, date, title }) {
  const trunct = (str) => {
    if (str.length < 100) {
      return str;
    } else {
      return str.slice(0, 90) + "...";
    }
  };
  return (
    <motion.div
      whileHover={{ scale: 1.094, opacity: 1 }}
      transition={{ duration: 0.3, type: "easeIn" }}
      className="w-full  top-0 opacity-[0]    bg-[#000000]  rounded-lg absolute z-[4000]"
    >
      <div>
        <img src={img} alt="" className="rounded" />
      </div>
      <div className="overlay-08 absolute w-full top-[50%]"></div>
      <div className=" px-1">
        <div className="flex justify-between mt-1">
          <p className="text-[#bcbcbc] text-sm capitalize">{title}</p>
          <p className="text-white text-sm">
            {dayjs(date).format("MMM D, YYYY")}
          </p>
        </div>
        <div>
          <p className="text-[#d2c9c99e] text-[12px]">{trunct(about)}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default DetailOnHoverForTopRated;
