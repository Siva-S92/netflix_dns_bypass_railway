import React, { useEffect } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import MovieContainer from "../components/MovieContainer";
import useNowplayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import SearchMovie from "../components/SearchMovie";

function BrowseContents() {
  const user = useSelector((store) => store.users.user);
  const toggle = useSelector((store) => store.movies.toggle);
  const navigate = useNavigate();

  //custom hooks
  useNowplayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Header />
      <div>
        {toggle ? (
          <SearchMovie />
        ) : (
          <>
            <MainContainer />
            <MovieContainer />
          </>
        )}
      </div>
    </>
  );
}

export default BrowseContents;
