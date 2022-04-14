import React from "react";


const Movies = ({title, rating, year }) => (
    <article>
        <div>
            <h3>Movie name: {title}</h3>
            <p>Rating on IMDB: {rating}</p>
            <p>Year: {year}</p>
        </div>
    </article>
)
    


export default Movies;
