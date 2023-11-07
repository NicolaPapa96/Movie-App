import { useNavigate } from "react-router-dom";

export default function Card({ title, poster, type, year, setSelectedMovie }) {
  const sendRequest = () => {
    fetch(
      `https://www.omdbapi.com/?apikey=f3492a76&t=${title}&type=movie&plot=full`
    )
      .then((response) => response.json())
      .then((data) => setSelectedMovie(data));
  };

  let navigate = useNavigate();

  const goToMovie = () => {
    sendRequest();
    navigate("/movie-details");
  };

  return (
    <div className="card" onClick={goToMovie}>
      <img src={poster} alt="poster"></img>
      <h3 className="movie-title">{title}</h3>
      <h5>
        Year: <span className="italic">{year}</span>
      </h5>
      <h5>
        Type: <span className="italic">{type}</span>
      </h5>
    </div>
  );
}
