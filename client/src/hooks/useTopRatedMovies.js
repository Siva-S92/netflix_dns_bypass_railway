import axios from "axios";
import { setTopRatedMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { BACKEND_MOVIE_API } from "../utils/constant";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BACKEND_MOVIE_API}/toprated`);
        dispatch(setTopRatedMovies(res.data.results));
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    };
    fetchData();
  }, []);
};

export default useTopRatedMovies;
