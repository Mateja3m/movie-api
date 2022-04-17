import "./App.css";
import { useState, useEffect, createContext } from "react";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";

import { Container, Button, Card } from "react-bootstrap";

export const MovieContext = createContext();

function App() {
  const [movie, setMovie] = useState([]);
  const [show, setShow] = useState(true);

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

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <MovieContext.Provider value={[movie]}>
      <Container className='App'>
        <Card.Title>Movie List</Card.Title>
        {show ? (
          <>
          <ReactBootStrap.Table striped bordered hover>
            <thead>
              <tr>
                <th>Year</th>
                <th>Title</th>
                <th>Rating</th>
                <th>Release</th>
              </tr>
            </thead>
            <tbody>
              {movie &&
                movie.map((item) => (
                  <tr key={item._id}>
                    <td>{item.year}</td>
                    <td>{item.title}</td>
                    <td>{item.rating}</td>
                    <td>{item.release}</td>
                  </tr>
                ))}
            </tbody>
          </ReactBootStrap.Table>
        <Nav />
        </>
        ) : null}

        <Button variant="primary" size="lg" onClick={() => setShow(!show)}>
          Click me
        </Button>
      </Container>
    </MovieContext.Provider>
  );
}

export default App;
