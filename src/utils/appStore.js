import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice"
import gptReducer from "./gptSlice"
import languageReducer from "./langConfig"

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gpt:gptReducer,
        lang:languageReducer,
    }
})

export default appStore;
