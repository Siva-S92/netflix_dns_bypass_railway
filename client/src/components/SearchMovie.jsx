import axios from "axios";
import React, { useState } from "react";
import { BACKEND_MOVIE_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovieDetails } from "../redux/searchSlice";
import toast from "react-hot-toast";
import { setIsLoading } from "../redux/userSlice";
import MovieLists from "./MovieLists";

function SearchMovie() {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.users.isLoading);
  const { movieName, searchedMovies } = useSelector(
    (store) => store.searchMovie
  );
  const [allmovies, setAllMovies] = useState([1, 2]);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true));
    try {
      const res = await axios.post(`${BACKEND_MOVIE_API}/search-movie`, {
        searchMovie,
      });
      if (res.data) {
        let movies = res.data.results;
        console.log(movies);
        setAllMovies(movies);
        dispatch(setSearchMovieDetails({ searchMovie, movies }));
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    } finally {
      dispatch(setIsLoading(false));
    }
    setSearchMovie("");
  };
  return (
    <>
      <div className="py-24">
        <form
          onSubmit={submitHandler}
          className="flex justify-between w-3/4 lg:w-1/2 mx-auto px-2 py-2 border rounded-xl  shadow-lg"
        >
          <input
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
            className="w-3/4 outline-none"
            type="text"
            placeholder="search movies..."
            required
          />
          <button className="bg-red-600 px-2 py-1 rounded" type="submit">
            {isLoading ? "loading..." : "search"}
          </button>
        </form>
      </div>

      {searchedMovies?.length > 0 ? (
        <MovieLists
          title={movieName}
          movies={searchedMovies}
          searchingMovie={true}
        />
      ) : (
        <div className="text-center text-xl text-gray-500">
          search any other movies...
        </div>
      )}

      {allmovies?.length <= 0 ? (
        <h1 className="text-center text-lg text-red-500">{`no movies available for ${movieName}`}</h1>
      ) : (
        ""
      )}
    </>
  );
}

export default SearchMovie;
