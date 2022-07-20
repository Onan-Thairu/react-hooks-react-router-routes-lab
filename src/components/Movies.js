import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      {/*{code here}*/}
      <h1>Movies Page</h1>
      {
        movies.map((movie) =>  {
          return (
            <div>
              <h3>Name: {movie.title}</h3>
              <p>Time: {movie.time}</p>
              <p>Genres:</p>
              {
                movie.genres.map((genre) => {
                  return (
                    <ul>
                      <li>{genre}</li>
                    </ul>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Movies;
