import React from "react";

const Movies = ({ title, rating, year }) => (
  <>
    <h5>
      <strong>Movie name:</strong> {title}
    </h5>
    <p>
      <strong>Rating on IMDB:</strong> {rating}
    </p>
    <p>
      <strong>Release Year: </strong>
      {year}
    </p>
  </>
);

export default Movies;
