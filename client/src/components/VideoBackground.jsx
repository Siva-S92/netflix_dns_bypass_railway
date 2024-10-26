import React, { useEffect } from "react";
import useMovieById from "../hooks/useMovieById";
import { useSelector } from "react-redux";

function VideoBackground({movieId, bool}) {
  const trailerMovie = useSelector((store)=> store.movies.trailerMovie)
  //custom hook
  useMovieById(movieId);
  

  return (
    <div className={`${bool ? "w-[100%]" : "w-screen"}`}>
      <iframe
        className={`${bool ? "w-[100%] aspect-video" : "w-screen aspect-video"}`}
        src={`https://www.youtube.com/embed/${trailerMovie ? trailerMovie.key : "KJwYBJMSbPI"}?si=hchAJBFn4TB26_T6&autoplay=1&mute=1&loop=1&playlist=${trailerMovie ? trailerMovie.key : "KJwYBJMSbPI"}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
