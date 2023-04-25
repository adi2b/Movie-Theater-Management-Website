import {useState, useEffect} from 'react'
import axios from 'axios';
import {Outlet, useNavigate} from "react-router-dom";

 function MoviesComp(){ 
  const navigate = useNavigate(); 

  const goToAllMovies = () =>
  {
      navigate("") 
  }

  const goToAddMovie = () =>
  {
      navigate("addMovie")
  }

  return (
    <div style={{width: "900px", alignItems: "center", border: "solid 2px blue"}}>
      
      <h3>Movies</h3>

      <button onClick={goToAllMovies}>All Movies</button> &nbsp;
      <button onClick={goToAddMovie}>Add Movie</button> <br/>            

      <Outlet />

      <br/>

    </div>
  );
  }

export default MoviesComp
