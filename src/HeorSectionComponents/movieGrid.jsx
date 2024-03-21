import React from "react";
import MovieCard from "./MovieCard";
import m2 from "../assets/m2.webp";

function MovieGrid({ label }) {
  return (
    <div style={{paddingLeft:'1vw', maxWidth:'96vw', overflow:'hidden',paddingTop:'0vh', paddingBottom:'0vh', marginTop:'2vh'}}>
      <h1 className="text-slate-300 ml-4 capitalize mt-4" style={{fontSize:'1.5rem'}}>{label}</h1>
      <div className="flex  w-[95vw] movie-grid scrool-smooth" style={{gap:'1.5rem'}}>
        <MovieCard img={m2} />
        <MovieCard />
        <MovieCard />
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
