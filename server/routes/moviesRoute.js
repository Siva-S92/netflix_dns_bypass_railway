import express from 'express';
import { MovieById, nowPlayingMoviesUrl, popularMoviesUrl, Search_Movie_URL, topRatedMoviesUrl, upcomingMoviesUrl } from '../controllers/movies.js';


const router = express.Router();

router.route("/movieID").post(MovieById);
router.route("/nowplaying").get(nowPlayingMoviesUrl);
router.route("/popular").get(popularMoviesUrl);
router.route("/toprated").get(topRatedMoviesUrl);
router.route("/upcoming").get(upcomingMoviesUrl);
router.route("/search-movie").post(Search_Movie_URL);




export const moviesRouter = router;
