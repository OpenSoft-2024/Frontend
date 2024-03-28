import { LampDemo } from "../lampdemo";

import MovieGrid from "../../HeorSectionComponents/movieGrid";
import MovieGridHorizontal from "../../HeorSectionComponents/movieGridHorizontal";
import { useSelector } from "react-redux";

const MySpace = () => {
  
  const {user} = useSelector((state) => state.userSlice);
  console.log(user);

  return (
    <>
      <section
        className="bg-black"
        style={{ minHeight: "100vh", marginTop: "0vh" }}
      >
        <LampDemo name = {user.name}/>

        <div className="posterSection pl-6 mt-20" style={{ zIndex: 1000 }}>
          <MovieGridHorizontal label="Continue Watching" />
          <MovieGrid label="Watch Later" />
          <MovieGrid label="Favourites" />
          <MovieGrid label="Rented" />
          <MovieGrid label="Watch Again" />
        </div>
      </section>
    </>
  );
};

export default MySpace;
