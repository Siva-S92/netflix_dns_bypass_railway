import React from "react";
import MovieCard from "./MovieCard";

function MovieLists({ title, movies, searchingMovie=false }) {
  return (
    <div className="px-5">
      <h1 className={`${searchingMovie ? "text-black" : "text-white"} text-3xl capitalize font-semibold py-2`}>{title}</h1>
      <div className="flex overflow-x-auto scroll-smooth no-scrollbar cursor-pointer">
        <div className="flex items-center">
          {movies && movies.map((movie, index) => <MovieCard key={movie.id} movieId={movie.id} movie_poster={movie.poster_path} />)}
        </div>
      </div>
    </div>
  );
}

export default MovieLists;
