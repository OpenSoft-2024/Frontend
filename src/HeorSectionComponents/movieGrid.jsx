import React from "react";
import MovieCard from "./MovieCard";
import m2 from "../assets/m2.webp";

function MovieGrid({ label }) {
  return (
    <div>
      <h1 className="text-white ml-4 capitalize text-lg mt-20  ">{label}</h1>
      <div className="flex  w-screen gap-2  movie-grid scrool-smooth">
        <MovieCard img={m2} />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}

export default MovieGrid;
