import React from "react";
import MovieLists from "./MovieLists";
import { useSelector } from "react-redux";

function MovieContainer() {
  const all_movies = useSelector((store)=> store.movies)
  return (
    <div className="bg-black">
      <div className="mt-0 lg:-mt-32">
        <MovieLists title={"Popular Movies"} movies={all_movies.popularMovies} />
        <MovieLists title={"Now Playing Movies"} movies={all_movies.nowPlayingMovies} />
        <MovieLists title={"Top Rated Movies"} movies={all_movies.topRatedMovies} />
        <MovieLists title={"Upcoming Movies"} movies={all_movies.upcomingMovies} />
      </div>
    </div>
  );
}

export default MovieContainer;
