import React from "react";
import c1 from "../assets/c1.jpg";
import { motion } from "framer-motion";
import dayjs from "dayjs";
function DetailOnHover({ img, about, date }) {
  const trunct = (str) => {
    if (str.length < 120) {
      return str;
    } else {
      return str.slice(0, 140) + "...";
    }
  };
  return (
    <motion.div
      whileHover={{ scale: 1.094, opacity: 1, translate: "translateX(-10%)" }}
      transition={{ duration: 0.3, delay: 1 }}
      className="w-[18rem]  detonh absolute  dpnone giveMeTrans overflow-hidden top-[-8%] rounded-lg  pb-2 scale-[1]overflow-hidden z-[1000]    translate-x-[-10%] bg-black left-[-18%]"
    >
      <div classNaem="w-[100%] h-[20vh]">
        <img src={img} alt="" w-full h-full rounded />
      </div>
      <div className="overlay-detalis  w-full top-[40%] h-12 absolute "></div>
      <div className="relative z-[200]">
        <div className="w-full  flex justify-between mt-4 pl-2 pr-2">
          <button className="text-black-2 px-8  ml-1 text-[1rem] capitalize bg-[#fbfbfbb4] smt hover:bg-[#cccccc] rounded-xl">
            {" "}
            <i className="ri-play-fill"></i>watch now{" "}
          </button>{" "}
          <span className="text-black opacity-[0.7] bg-[#898989] hover:bg-[#e0e0e0] text-[2rem] smt  px-5 rounded-lg">
            +
          </span>
        </div>
      </div>
      <div className="text-[#cbcaca] flex gap-3 mt-2 ml-2 text-[12px] pl-2 items-center absolute z-[200]">
        <span className="text-[12px]">
          {" "}
          {dayjs(date).format("MMM D, YYYY")}
        </span>
        <div className="point-detail w-2 h-2 rounded-full bg-white"></div>
        <span>U/A +7</span>
        <div className="point-detail w-2 h-2 rounded-full bg-white"></div>
        <span>biography</span>
      </div>
      <div className="movie-detail-overview text-[#e1dfdf] pl-3 mt-10 text-sm w-full">
        <p className="w-full text-[#a4a3a3] text-sm">{trunct(about)}</p>
      </div>
    </motion.div>
  );
}

export default DetailOnHover;
