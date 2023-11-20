import React from "react";
import { movies } from "../data";

function Movies() {
  return <div className="movies" >
<h1>Movies Page</h1>
{movies.map(({ title, time, genres })=>{
  //const genres=movie.genres
return(<div key={title} >
  <h4>{title}</h4>
  <p>{time}</p>
  <ul>{genres.map((genre,index)=>(<li key={index}>{genre}</li>))}</ul>
</div>)
})}
  </div>;
}

export default Movies;
