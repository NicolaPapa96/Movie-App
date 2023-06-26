import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MovieSearch from "./Pages/MovieSearch";
import Home from "./Pages/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import MovieDetails from "./Pages/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState([]);
  const navigate = useNavigate();

  // ottenere i dati dall'api in base a cosa si è inserito nell'input
  useEffect(() => {
    fetch(
      `http://www.omdbapi.com/?apikey=f3492a76&s=${search}&type=movie&plot=short`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
  }, [search]);

  const searchMovie = (e) => {
    e.preventDefault();
    setSearch(input);
    navigate("/movie-search");
  };

  console.log(selectedMovie);

  return (
    <div className="App">
      <Navbar searchMovie={searchMovie} setInput={setInput} input={input} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movie-search"
          element={
            <MovieSearch setSelectedMovie={setSelectedMovie} movies={movies} />
          }
        />
        <Route
          path="/movie-details"
          element={<MovieDetails selectedMovie={selectedMovie} />}
        />
      </Routes>
    </div>
  );
}

export default App;
