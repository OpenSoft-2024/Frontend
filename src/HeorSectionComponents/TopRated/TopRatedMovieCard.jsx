import Img from "../../lazyLoading/Img";
function TopRatedMovieCard({ img }) {
  return (
    <div className={`w-40  tpr-cont  rounded   h-fit scrollbar-hidden `}>
      {img ? (
        <Img src={img} className="tpr w-full h-full scrollbar-hidden rounded" />
      ) : (
        <div className=" w-40 h-[20rem] blinker bg-white"></div>
      )}
    </div>
  );
}

export default TopRatedMovieCard;
