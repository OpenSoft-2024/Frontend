import React from "react";
// import plans from "../css/plans.css";
import c1 from "../../assets/p1.jpg";
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
  return (
    <div>
      <div className="plan-container w-screen relative h-screen ">
        <div className="flex flex-col gap-4 relative ">
          <div class="srcoller flex">
            <div class="scrooler-con flex gap-4">
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
            </div>

            <div class="scrooler-con flex gap-4">
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
            <div class="scrooler-con flex gap-4">
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
            </div>
            <div class="scrooler-con  flex gap-4">
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
            </div>
            <div class="scrooler-con flex gap-4">
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
            <div class="scrooler-con flex gap-4">
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
            </div>
            <div class="scrooler-con flex gap-4">
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
              <PlansInfiniteScroolerMovieBox img={c1} />
            </div>
            <div class="scrooler-con flex gap-4">
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
        <div className="plan-overlay1 absolute top-0 left-0 w-2/4 h-full"></div>
        <div className="plan-overlay2 absolute  top-0 right-0 w-2/4 h-full"></div>
        <div className="overlayText absolute ">
          <h1 className="text-white ">
            <span className="plan-heading">Entertainment</span> will never
          </h1>
          <p className="capitalize">gonna stop</p>
        </div>
      </div>
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
  );
}

export default Plans;
