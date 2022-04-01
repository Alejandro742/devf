import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faStar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { getMoviesAction } from "../../actions/movie.actions";
import Movie from "./Movie";

const Movies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //Fetch Api
    const loadMovies = () => dispatch(getMoviesAction());
    loadMovies();
  }, []);

  const movies = useSelector((state) => state.movies.movies);
  return (
    <div className="container">
      <h2 className="text-center my-5">Películas</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="bg-primary table-dark">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">
                <span className="mr-1">Calificación</span>{" "}
                <FontAwesomeIcon icon={faStar} />
              </th>
              <th scope="col">
                <span className="mr-1">Duración</span>{" "}
                <FontAwesomeIcon icon={faClock} />
              </th>
              <th scope="col">
                <span className="mr-1">Premios</span>{" "}
                <FontAwesomeIcon icon={faTrophy} />
              </th>
            </tr>
          </thead>
          <tbody>
            {movies.length === 0
              ? null
              : movies.map((movie) => {
                  return <Movie key={movie._id} movie={movie} />;
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Movies;
