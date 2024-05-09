/** @format */

import {useState, useEffect} from "react";
import Footer from "../components/Footer";
import {NavLink} from "react-router-dom";
import "../styles/home.page.css";

function HomePage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://studioghibliapi-d6fc8.web.app/films"
        );
        const data = await response.json();
        const images = data.map(film => ({
          image: film.image,
          banner: film.movie_banner,
        }));
        setImages(images);
      } catch (error) {
        console.error("Failed to fetch images: ", error);
      }
    };

    fetchImages();
  }, []);

  const duplicatedImages = [...images, ...images]; // Duplicate the images

  return (
    <div className="home-container">
      <div className="title-and-links">
        <NavLink
          to="/"
          className="home-link small-link"
          activeClassName="active"
        >
          Home
        </NavLink>

        <h1 className="home-title">Studio Ghibli</h1>

        <NavLink
          to="/films"
          className="films-link small-link"
          activeClassName="active"
        >
          Films
        </NavLink>
      </div>
      <p className="home-tagline">Family, Fun, Films...</p>
      <div className="image-scroll-container">
        {duplicatedImages.map((image, index) => (
          <div
            className="scroll-image-container"
            key={index}
          >
            <img
              src={image.image}
              alt={`Film ${index}`}
              className="scroll-image"
            />
            <img
              src={image.banner}
              alt={`Banner ${index}`}
              className="scroll-image"
            />
          </div>
        ))}
      </div>{" "}
      <Footer />
    </div>
  );
}

export default HomePage;
