import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {
        directors.map((director) => {
          return (
            <div>
              <h3>Name: {director.name}</h3>
              {
                director.movies.map((movie) => {
                  return (
                    <ul>
                      <li>{movie}</li>
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

export default Directors;
