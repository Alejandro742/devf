import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
} from "../types";

const initialState = {
  movies: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        movies: action.payload,
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        loading: action.payload,
        error: action.payload,
      };

    default:
      return state;
  }
}
