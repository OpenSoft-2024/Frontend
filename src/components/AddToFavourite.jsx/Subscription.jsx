import { motion } from "framer-motion";
import react from "react";
import { IoCheckmark} from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import BackgroundColor from "../../LandingPageBackgroundImageContext/context2";
function Subs() {
  let {
    backgroundColor1,
    setBackgroundColor1,
    backgroundColor2,
    setBackgroundColor2,
    backgroundColor3,
    setBackgroundColor3,
  } = useContext(BackgroundColor);
  return (
    <motion.div
      initial={{ opacity: "0.3", right: "0%" }}
      animate={{ opacity: "1", right: "7%" }}
      transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
      className="absolute top-[30%] right-[7%] opacity-0 text-white flex   gap-2 rounded-lg "
    >
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-[1rem] capitalize text-opacity-[0.8]">
            all content
          </p>
          <p className="text-sm text-opacity-[0.6] text-white">
            Movies,Live Sports,Tv ,Specials
          </p>
        </div>
        <div>
          <p className="text-[1rem] capitalize text-opacity-[0.8]">
            Watch On Tv Or Laptop
          </p>
        </div>
        <div>
          <p className="text-[1rem] capitalize text-opacity-[0.8]">
            add free movies and shows (except sports)
          </p>
        </div>
        <div>
          <p className="text-[1rem] capitalize text-opacity-[0.8]">
            no of devices that can logged In
          </p>
        </div>
        <div>
          <p className="text-[1rem] capitalize text-opacity-[0.8]">
            max video quality
          </p>
        </div>
        <div>
          <p className="text-[1rem] capitalize text-opacity-[0.8]">
            max Audio quality
          </p>
          <p className="text-sm text-opacity-[0.6] text-white">
            atmos avialble on selected title only
          </p>
        </div>
      </div>

      <div className={` rounded ${backgroundColor1 ? "bg-[#ff3636]" : ""}`}>
        <p className="device mt-[-35%] text-lg text-center">Tier 1</p>
        <div className="value flex flex-col gap-7 mt-2 px-10  ">
          <div>
            <IoCheckmark className="text-2xl" />
          </div>
          <div>
            <IoCheckmark className="text-2xl" />
          </div>
          <div>
            <RxCross2 className="text-2xl" />
          </div>
          <div>
            1
          </div>
          <div>
            360p
          </div>
          <div>
          Dolby Atmos
          </div>
        </div>
      </div>
      <div className={` rounded ${backgroundColor2 ? "bg-[#ff3636]" : ""}`}>
        <p className="device mt-[-35%] text-lg text-center">Tier 2</p>
        <div className="value flex flex-col gap-7 mt-2 px-10 ">
          <div>
            <IoCheckmark className="text-2xl" />
          </div>
          <div>
            <IoCheckmark className="text-2xl" />
          </div>
          <div>
            <IoCheckmark className="text-2xl"></IoCheckmark>
          </div>
          <div>
            2
          </div>
          <div>
            480p
          </div>
          <div>
           Dolby Atmos
          </div>
        </div>
      </div>
      <div className={` rounded ${backgroundColor3 ? "bg-[#ff3636]" : ""}`}>
        <p className="device  mt-[-35%] text-lg text-center">Tier 3</p>
        <div className="value value flex flex-col gap-7 mt-2 px-10 ">
          <div>
            <IoCheckmark className="text-2xl" />
          </div>
          <div>
            <IoCheckmark className="text-2xl" />
          </div>
          <div>
            <IoCheckmark className="text-2xl"></IoCheckmark>
          </div>
          <div>
            3
          </div>
          <div>
            720p
          </div>
          <div>
          Dolby Atmos
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Subs;
