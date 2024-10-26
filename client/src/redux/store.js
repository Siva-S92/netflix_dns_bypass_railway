import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
    reducer: {
        users: userReducer,
        movies: movieReducer,
        searchMovie: searchReducer
    }
})

export default store;