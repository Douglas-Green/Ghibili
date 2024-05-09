/** @format */

import {Component} from "react";
import "./FilmsList.css";

class FilmsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.getFilms();
  }

  getFilms() {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then(response => response.json())
      .then(data => {
        this.setState({list: data});
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }

  render() {
    return (
      <div className="filmsList-container">
        <ul className="filmsList-listings">
          {this.state.list.map(film => (
            <li key={film.id}>{film.title}</li>
            // here can go more details from the api
          ))}
        </ul>
      </div>
    );
  }
}

export default FilmsList;
