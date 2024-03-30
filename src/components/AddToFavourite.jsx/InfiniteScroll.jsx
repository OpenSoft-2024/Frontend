import { useSelector } from "react-redux";
import useFetch from "../../custumHooks/useFetch";
import { useState } from "react";
import { useEffect } from "react";
import PlansInfiniteScroolerMovieBox from  "../PlansComponents/plansInfiniteScroolerMovieBox";

function InfiniteScroll({page}) {

  const [data, setData] = useState(null);
  const { heroImg, isLoading, error } = useFetch(`/trending/all/day?page=${page}`);
  const { url } = useSelector((state) => state.AppSlice);

  useEffect(() => {
    setData(heroImg);
  }, [heroImg]);

  return (
    <div className="scrooler-con sc1 flex gap-4">
      {data?.results?.map((item) => {
        return (
          <PlansInfiniteScroolerMovieBox
            img={url?.backdrop + item?.backdrop_path}
            key={item.id}
          />
        );
      })}
    </div>
  );
}

export default InfiniteScroll;
