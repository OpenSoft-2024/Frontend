import React from "react";
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
    // setBgImage(localStorage.getItem('def'))
  }, [heroImg]);

  return (
    <div class="scrooler-con sc1 flex gap-4">
      {data?.results?.map((item) => {
        console.log(item);
        console.log(url);
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
