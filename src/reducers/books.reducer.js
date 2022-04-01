import { FETCH_BOOKS, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR } from "../types";

// Cada reducer tiene su propio state
const initialState = {
  books: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        books: action.payload,
      };
    case FETCH_BOOKS_ERROR:
      return {
        ...state,
        loading: action.payload,
        error: action.payload,
      };

    default:
      return state;
  }
}
