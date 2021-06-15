import { combineReducers } from "redux";
import { categoryReducer } from "./categoryreducer";
import { getMovieReducer } from "./getMovieReducer";

export const rootReducer=combineReducers({
    category:categoryReducer,
    movies:getMovieReducer
})