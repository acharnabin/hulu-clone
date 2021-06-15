/* eslint-disable default-case */
import { categoryConstants } from "../action/actionTypes";

const initdata = {
  category: [],
  loading: false,
};

export const categoryReducer = (state = initdata, action) => {
  
  switch (action.type) {
    case categoryConstants.GET_CATEGORY_REQUEST:
      state = { ...state, loading: true };
      break;
    case categoryConstants.GET_CATEGORY_SUCCESS:
      state = { ...state, loading: false,category:action.payload};
      
      break;
    case categoryConstants.GET_CATEGORY_FAILED:
      state = { ...state, loading: false };
      break;
  }
  return state;
};
