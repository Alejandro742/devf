import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faClapperboard } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <h2>
          <Link className="text-light" to={"/"}>
            DevF - The One API
          </Link>
        </h2>
      </div>

      <Link className="text-light mr-2" to={"/movies"}>
        <div className="btn btn-danger nuevo-post d-block d-md-inline-block">
          <span className="mr-1">Películas</span> <FontAwesomeIcon icon={faClapperboard} />
        </div>
      </Link>
      <Link className="text-light ml-2" to={"/books"}>
        <div className="btn btn-danger nuevo-post d-block d-md-inline-block">
          <span className="mr-1">Libros</span> <FontAwesomeIcon icon={faBook} />
        </div>
      </Link>
    </nav>
  );
};

export default Header;
