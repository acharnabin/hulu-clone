import { categoryConstants } from "./actionTypes";
import axios from "axios";
import { fetchMovieById ,fetchForHome} from "../../axios/api";
export const getMovie = (id) => {
  return async (dispatch) => {
    dispatch({ type: categoryConstants.GET_MOVIE_REQUEST });
    const res = await axios.get(`${fetchMovieById}${id}`);
    console.log(res);
    if (res.status === 200) {
      dispatch({
        type: categoryConstants.GET_MOVIE_SUCCESS,
        payload: res.data.results,
      });
    } else {
      dispatch({
        type: categoryConstants.GET_MOVIE_FAILED,
      });
    }
  };
};

export const movieHomepage=()=>{
  return async (dispatch) => {
    dispatch({ type: categoryConstants.GET_MOVIE_REQUEST });
    const res = await axios.get(fetchForHome);
    console.log(res);
    if (res.status === 200) {
      dispatch({
        type: categoryConstants.GET_MOVIE_SUCCESS,
        payload: res.data.results,
      });
    } else {
      dispatch({
        type: categoryConstants.GET_MOVIE_FAILED,
      });
    }
  };
}