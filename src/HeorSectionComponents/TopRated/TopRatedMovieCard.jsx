import Img from "../../lazyLoading/Img";
// import DetailOnHover from "../../components/detailOnHovering";
function TopRatedMovieCard({ img, img2, about, date }) {
  return (
    <div
      className={`w-40  tpr-cont  rounded relative   h-fit scrollbar-hidden `}
    >
      {img ? (
        <Img src={img} className="tpr w-full h-full scrollbar-hidden rounded" />
      ) : (
        <div className=" w-40 h-[20rem] blinker bg-white"></div>
      )}
      {/* <DetailOnHover img={img2} about={about} date={date} /> */}
    </div>
  );
}

export default TopRatedMovieCard;
