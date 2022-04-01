import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarcode, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooksAction } from "../../actions/book.actions";
import Book from "./Book";

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //Fetch Api
    const loadBooks = () => dispatch(getBooksAction());
    loadBooks();
  }, []);

  const books = useSelector((state) => state.books.books);
  return (
    <div className="container">
      <h2 className="text-center my-5">Libros</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="bg-primary table-dark">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">
                <span className="mr-1">ISBN</span>
                <FontAwesomeIcon icon={faBarcode} />
              </th>
            </tr>
          </thead>
          <tbody>
            {books.length === 0
              ? null
              : books.map((book) => {
                  return <Book key={book._id} book={book} />;
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Books;
