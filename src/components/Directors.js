import React from "react";
import { directors } from "../data";

function Directors() {
  
  return <div>
    <h1>Directors Page</h1>
    {directors.map((director,index)=>{
      const movies=director.movies
     return (<div key={index}>
        <h4>{director.name}</h4>
        <ul>{movies.map((movie,index)=>(<li key={index}>{movie}</li>))}</ul>
      </div>)
    })}
  </div>;
}

export default Directors;
