import "./App.css";
import { useState, createContext } from "react";
import Movies from "./Movies";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Card } from "react-bootstrap";

export const MovieContext = createContext();

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
    <MovieContext.Provider value={[movie]}>
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>Movie List</Card.Title>
            <Nav />
            <Card.Text className="mb-2 text-muted">
              {movie.map((movies) => (
                <Movies
                  key={movies._id}
                  title={movies.title}
                  rating={movies.rating}
                  year={movies.year}
                />
              ))}
            </Card.Text>
            <Button variant="primary" size="lg" onClick={getMovie}>
              Click me
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </MovieContext.Provider>
  );
}

export default App;
