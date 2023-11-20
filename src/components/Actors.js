import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actors.map((actor,index)=>{
      const movies=actor.movies
      return(<div key={index}>
        <h4>{actor.name}</h4>
        <ul>{movies.map((movie,index)=>(<li key={index}>{movie}</li>))}</ul></div>
      )
    })}
  </div>;
}

export default Actors;
