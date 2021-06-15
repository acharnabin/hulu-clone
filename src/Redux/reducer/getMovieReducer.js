/* eslint-disable default-case */
import { categoryConstants } from "../action/actionTypes";

const initdata = {
  movies: [],
  loading: false,
};

export const getMovieReducer = (state = initdata, action) => {
  
  switch (action.type) {
    case categoryConstants.GET_MOVIE_REQUEST:
      state = { ...state, loading: true };
      break;
    case categoryConstants.GET_MOVIE_SUCCESS:
      state = { ...state, loading: false,movies:action.payload};
      
      break;
    case categoryConstants.GET_MOVIE_FAILED:
      state = { ...state, loading: false };
      break;
  }
  return state;
};
