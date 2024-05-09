/** @format */

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home.page";
import FilmsPage from "./pages/films.page";
import SingleFilmPage from "./pages/singlefilm.page.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/films"
          element={<FilmsPage />}
        />
        <Route
          path="/film/:id"
          element={<SingleFilmPage />}
        />
      </Routes>
    </Router>
  );
}
export default App;
