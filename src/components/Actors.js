import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {
        actors.map((actor) => {
          return (
            <div>
              <h3>{actor.name}</h3>
              {
                actor.movies.map((movie) => {
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

export default Actors;
