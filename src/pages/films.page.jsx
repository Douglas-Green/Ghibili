/** @format */

import {useState, useEffect} from "react";
import {Link, NavLink} from "react-router-dom";
import "../styles/films.page.css";

function FilmsPage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then(response => response.json())
      .then(data => setFilms(data))
      .catch(error => console.error("Error fetching films:", error));
  }, []);

  return (
    <div className="filmsLanding-container">
      <div className="navigation-links">
        <NavLink
          to="/"
          className="home-link"
          activeClassName="active"
        >
          Home
        </NavLink>
        <NavLink
          to="/films"
          className="films-link"
          activeClassName="active"
        >
          Films
        </NavLink>
      </div>
      <h1 className="filmsLanding-title">Films Directory</h1>
      <ul className="filmsLanding-listings">
        {films.map(film => (
          <li key={film.id}>
            <Link
              to={`/film/${film.id}`}
              className="film-link"
            >
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilmsPage;
