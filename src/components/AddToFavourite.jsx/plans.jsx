import React from "react";
// import plans from "../css/plans.css";
import c1 from "../../assets/p1.jpg";
import { motion, useScroll } from "framer-motion";
import Subs from "../AddToFavourite.jsx/Subscription";
import { useState } from "react";
import { Provider } from "react";
import BackgroundColor from "../../LandingPageBackgroundImageContext/context2";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoLaptopOutline } from "react-icons/io5";
import { PiTelevisionSimple } from "react-icons/pi";

// import c2 from "../../assets/p1.jpg";
// import c3 from "../../assets/p1.jpg";
// import c4 from "../../assets/p1.jpg";
// import c5 from "../../assets/p1.jpg";
// import c6 from "../../assets/p1.jpg";
// import c7 from "../../assets/p1.jpg";
// import c8 from "../../assets/p1.jpg";
// import c1 from "../../assets/p1.jpg";
import PlansInfiniteScroolerMovieBox from "../../PlansComponents/plansInfiniteScroolerMovieBox";
function Plans() {
  let [backgroundColor1, setBackgroundColor1] = useState(true);
  let [backgroundColor2, setBackgroundColor2] = useState(false);
  let [backgroundColor3, setBackgroundColor3] = useState(false);
  const item = ["entertainment", "will ", "never"];
  const button = ["mobile ", "super", "premium"];
  const handleOnClick = (e) => {
    console.log(e.target);
    if (e.target.id == 5) {
      setBackgroundColor1(true);
      setBackgroundColor2(false);
      setBackgroundColor3(false);
    } else if (e.target.id == 6) {
      setBackgroundColor1(false);
      setBackgroundColor2(true);
      setBackgroundColor3(false);
    } else {
      setBackgroundColor1(false);
      setBackgroundColor2(false);
      setBackgroundColor3(true);
    }
  };
  return (
    <BackgroundColor.Provider
      value={{
        backgroundColor1,
        setBackgroundColor1,
        backgroundColor2,
        setBackgroundColor2,
        backgroundColor3,
        setBackgroundColor3,
      }}
    >
      <div className="">
        <div className="w-screen h-[2rem] bg-black"></div>
        <div className="plan-container w-screen relative h-screen  ">
          <div className="flex flex-col gap-4 relative ">
            <div class="srcoller flex">
              <div class="scrooler-con sc1 flex gap-4">
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
              </div>

              <div class="scrooler-con sc1 flex gap-4">
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
              </div>
            </div>
            <div class="srcoller flex">
              <div class="scrooler-con  sc1 flex gap-4">
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
              </div>
              <div class="scrooler-con sc1 flex gap-4">
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
              </div>
              <div class="scrooler-con flex sc1  gap-4">
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
              </div>
            </div>
            <div class="srcoller flex">
              <div class="scrooler-con flex gap-4 sc1">
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
              </div>
              <div class="scrooler-con flex gap-4 sc1">
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
              </div>
              <div class="scrooler-con flex gap-4 sc1">
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
                <PlansInfiniteScroolerMovieBox img={c1} />
              </div>
            </div>
          </div>
          <div className="plan-overlay1 absolute top-0 left-0 w-[40%] h-full"></div>
          <div className="plan-overlay2 absolute  top-0 right-0 w-[90%] h-full"></div>
          <div className="top-[25%] left-[5%]  flex flex-col absolute ">
            <motion.h1
              inital={{ width: "0" }}
              animate={{ width: "fit-content" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.3 }}
              className="text-red-500 text-[3.5vw] font-bold w-[0px] overflow-hidden"
            >
              Entertainment
            </motion.h1>
            <motion.p1
              inital={{ width: "0" }}
              animate={{ width: "fit-content" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.3 }}
              className="text-[2.5vw] capitalize font-bold text-white w-[0] overflow-hidden text-opacity-[0.8]"
            >
              <p className="w-[30vw] font-bold">will never</p>
            </motion.p1>
            <motion.p1
              inital={{ width: "0" }}
              animate={{ width: "fit-content" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.3 }}
              className="capitalize text-[3.5vw]  text-red-500 w-0  overflow-hidden"
            >
              <p className="w-[30vw] font-bold">gonna stop</p>
            </motion.p1>
          </div>
        </div>
        <div className="absolute top-[80%] left-[5%] flex  gap-9">
          {button.map((item, index) => {
            let price;
            if (index == 0) {
              price = 245;
            } else if (index == 1) {
              price = 459;
            } else {
              price = 689;
            }
            return (
              <motion.div
                inital={{ height: "0" }}
                animate={{ height: "fit-content" }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                className="overflow-hidden h-0 backdrop-blur-md relative"
                key={item}
              >
                <div
                  className="btnover w-full h-full absolute z-[4000]  "
                  id={index + 5}
                  onClick={handleOnClick}
                ></div>
                <button
                  className={`text-white relative  text-bold text-[2vw] px-4 w-[20vw]   p-1 b-[solid,2px,white]  rounded-xl  
                  ${
                    (backgroundColor1 && index == 0) ||
                    (backgroundColor2 && index == 1) ||
                    (backgroundColor3 && index == 2)
                      ? "b-red"
                      : "b-white"
                  }
                
                
                 `}
                >
                  <IoPhonePortraitOutline
                    className={`absolute  top-[30%] right-[10%] text-red-500 
                   ${backgroundColor1 && index == 0 ? "visible" : "invisible"}
                  `}
                  />
                  <PiTelevisionSimple
                    className={`absolute  top-[30%] right-[10%] text-red-500 
                   ${backgroundColor3 && index == 2 ? "visible" : "invisible"}
                  `}
                  />
                  <IoLaptopOutline
                    className={`absolute  top-[30%] right-[10%] text-red-500 
                   ${backgroundColor2 && index == 1 ? "visible" : "invisible"}
                  `}
                  />

                  <p className="text-[1.4rem] text-left">{item}</p>
                  <p className="text-left">
                    <span className="text-[18px] absolute top-[50%] ">
                      &#8377;
                    </span>
                    <span className="ml-4 font-bold">{price}</span>
                    <span className="text-[17px]">/year</span>
                  </p>
                </button>
              </motion.div>
            );
          })}
        </div>
        <Subs></Subs>
        <motion.div
          initial={{ height: "0%" }}
          animate={{ height: "fit-content" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
          className="overflow-hidden h-[0px] absolute top-[82%] right-[5%] hover:scale-[1.03] "
        >
          <button className="text-white  py-4 px-10 capitalize bg-red-700 hover:bg-red-600 font-bold rounded ">
            {backgroundColor1 ? "conitnue with mobile" : ""}
            {backgroundColor2 ? "conitnue with supper" : ""}
            {backgroundColor3 ? "conitnue with Premium" : ""}
          </button>
        </motion.div>

        <div className="flex w-screen text-white px-20 justify-between gap-2">
          <div className="w-3/12  greeting-Box rounded-3xl p-4">
            <h1>storie tailored to your taste</h1>
          </div>
          <div className="w-3/12 greeting-Box rounded-3xl p-4">
            <h1>a place just for kid </h1>
          </div>
          <div className="w-3/12 greeting-Box rounded-3xl p-4">
            <h1>stream anywere and everywhere</h1>
          </div>
          <div className="w-3/12 greeting-Box rounded-3xl p-4">
            <h1>stream on any media size</h1>
          </div>
        </div>
      </div>
    </BackgroundColor.Provider>
  );
}

export default Plans;
