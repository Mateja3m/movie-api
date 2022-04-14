import React, { useContext } from "react";
import { MovieContext } from "./App";

const Nav = () => {
  const [movie] = useContext(MovieContext);

  return <p>List of {movie.length} Movies</p>;
};

export default Nav;
