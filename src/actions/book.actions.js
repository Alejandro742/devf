import swal from "sweetalert2";
import clientAxios from "../config/axios";

import { FETCH_BOOKS, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR } from "../types";


export function getBooksAction() {
  return async (dispatch) => {
    dispatch(fetchBooks());
    try {
      const books = await clientAxios.get("book");
      dispatch(fetchBooksSuccess(books.data.docs));
    } catch (error) {
      console.log(error);
      dispatch(fetchBooksError());
    }
  };
}
const fetchBooks = () => ({
  type: FETCH_BOOKS,
  payload: true,
});

const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

const fetchBooksError = () => ({
  type: FETCH_BOOKS_ERROR,
  payload: true,
});
