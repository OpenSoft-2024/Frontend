import Img from "../../lazyLoading/Img";
function TopRatedMovieCard({ img }) {
  return (
    <div className="w-40  tpr-cont  rounded   h-fit scrollbar-hidden     ">
      <Img src={img} className="tpr w-full h-full scrollbar-hidden rounded  " />
    </div>
  );
}

export default TopRatedMovieCard;
