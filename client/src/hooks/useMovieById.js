import axios from "axios";
import { useDispatch } from "react-redux";
import { BACKEND_MOVIE_API } from "../utils/constant";
import { setTrailerMovie } from "../redux/movieSlice";
import { useEffect } from "react";

const useMovieById = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {

        const res = await axios.post(
          `${BACKEND_MOVIE_API}/movieID`,{movieId}
        );
        const trailer = res?.data?.results?.filter(
          (item) => item.type === "Trailer"
        );
        dispatch(
          setTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0])
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
};

export default useMovieById;
