import axios from "axios";
import { setNowPlayingMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import { BACKEND_MOVIE_API } from "../utils/constant";
import toast from "react-hot-toast";
import { useEffect } from "react";

const useNowplayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BACKEND_MOVIE_API}/nowplaying`);
        dispatch(setNowPlayingMovies(res.data.results));
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    };
    fetchData();
  }, []);
};

export default useNowplayingMovies;
