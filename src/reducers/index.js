import { combineReducers } from "redux";

import booksReducer from "./books.reducer";
import movieReducer from "./movie.reducer";

export default combineReducers({
  books: booksReducer,
  movies: movieReducer
});
