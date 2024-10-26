import axios from "axios";
import { setPopularMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { BACKEND_MOVIE_API } from "../utils/constant";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BACKEND_MOVIE_API}/popular`);
        dispatch(setPopularMovies(res.data.results));
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    };
    fetchData();
  }, []);
};

export default usePopularMovies;
