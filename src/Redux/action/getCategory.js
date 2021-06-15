import { categoryConstants } from "./actionTypes";
import axios from "axios";
import { fetchCategory } from "../../axios/api";
export const getCategory = () => {
  return async (dispatch) => {
    dispatch({ type: categoryConstants.GET_CATEGORY_REQUEST });
    const res = await axios.get(fetchCategory);
    if (res.status === 200) {
      dispatch({
        type: categoryConstants.GET_CATEGORY_SUCCESS,
        payload: res.data.genres,
      });
    } else {
      dispatch({
        type: categoryConstants.GET_CATEGORY_FAILED,
      });
    }
  };
};
