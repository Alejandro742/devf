import swal from "sweetalert2";
import clientAxios from "../config/axios";

import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
} from "../types";

export function getMoviesAction() {
  return async (dispatch) => {
    dispatch(fetchMovies());
    try {
      const movies = await clientAxios.get("movie");
      dispatch(fetchMoviesSuccess(movies.data.docs));
    } catch (error) {
      console.log(error);
      dispatch(fetchMoviesError());
    }
  };
}
const fetchMovies = () => ({
  type: FETCH_MOVIES,
  payload: true,
});

const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

const fetchMoviesError = () => ({
  type: FETCH_MOVIES_ERROR,
  payload: true,
});
