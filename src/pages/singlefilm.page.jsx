/** @format */
import {useState, useEffect, useCallback} from "react";
import {useParams, NavLink} from "react-router-dom";
import "../styles/singlefilm.page.css";

function SingleFilmPage() {
  const [item, setItem] = useState({});
  const {id} = useParams();

  const getFilm = useCallback(() => {
    fetch(`https://studioghibliapi-d6fc8.web.app/films/${id}`)
      .then(response => response.json())
      .then(data => setItem(data))
      .catch(error => console.error("Error fetching film details:", error));
  }, [id]); // useCallback dependency array includes `id`

  useEffect(() => {
    getFilm();
  }, [getFilm]); // Dependency array includes getFilm to refetch if the function updates (when id changes)

  return (
    <div className="singleFilmPage-container">
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
      <div className="singleFilmPage-content">
        <img
          className="singleFilmPage-poster"
          src={`${item.image}`}
          alt={`${item.title} Poster`}
        />
        <div className="singleFilmPage-filmStats">
          <h1>{item.title}</h1>
          <p>
            Directed by {item.director}. Produced by {item.producer}.
          </p>
          <p>
            The film was released in <strong>{item.release_date}</strong> and
            garnered a <strong>{item.rt_score}</strong> aggregate score on{" "}
            <a
              href="https://www.rottentomatoes.com/"
              target="_blank"
              rel="noreferrer"
            >
              Rotten Tomatoes
            </a>
          </p>
          <h2>Description</h2>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleFilmPage;
