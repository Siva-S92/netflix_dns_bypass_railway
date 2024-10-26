import { createSlice } from "@reduxjs/toolkit"; 


const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        toggle: false,
        trailerMovie: null,
        open: false,
        id: ""
    },
    reducers: {
        //actions
        setNowPlayingMovies : (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        setPopularMovies : (state, action)=>{
            state.popularMovies = action.payload;
        },
        setTopRatedMovies : (state, action)=>{
            state.topRatedMovies = action.payload;
        },
        setUpcomingMovies: (state, action)=>{
            state.upcomingMovies = action.payload
        },
        setToggle: (state) => {
            state.toggle = !state.toggle
        },
        setTrailerMovie: (state, action)=>{
            state.trailerMovie = action.payload
        },
        setOpen: (state, action)=>{
            state.open = action.payload
        },
        setId: (state, action)=> {
            state.id = action.payload
        }

    }
});
export const {setNowPlayingMovies, setPopularMovies, setTopRatedMovies, setUpcomingMovies, setToggle, setTrailerMovie, setOpen, setId} = movieSlice.actions;
export default movieSlice.reducer;