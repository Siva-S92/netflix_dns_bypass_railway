import React, { useEffect, useState } from "react";
// import {  BACKEND_SERVER } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setId, setOpen } from "../redux/movieSlice";

function MovieCard({ movieId, movie_poster }) {
  // console.log(movie_poster)
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(setId(movieId));
    dispatch(setOpen(true));
  };

  const imageUrl = `${BACKEND_SERVER}/tmdb-images/t/p/w500${movie_poster}`;
  // console.log(imageUrl)

  if (movie_poster === null) return null;
  return (
    <div onClick={handleOpen} className="mr-2 w-40 h-[220px] shrink-0">
      <img
        className="w-full h-full object-cover"
        src={imageUrl}
        alt="movie-banner"
      />
    </div>
  );
}

export default MovieCard;
