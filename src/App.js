import "./App.css";
import { useState } from "react";
import Movies from "./Movies";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function App() {
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
  
    const response = await fetch(
      "https://movies-app1.p.rapidapi.com/api/movies",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
          "X-RapidAPI-Key":
            "7ea436d717msh3c3d35aec1b2c0dp1a68acjsn41b7b56cd274",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const movie = await response.json();
    console.log(movie);
    setMovie(movie.results);
  };

  

  return (
    <div>
      {movie.map((movies) => (
        <Movies
          key={movies.id}
          title={movies.title}
          rating={movies.rating}
          year={movies.year}
        />
      ))}
      <Button variant="primary" onClick={getMovie}>
        Click me
      </Button>
    </div>
  );
}

export default App;
