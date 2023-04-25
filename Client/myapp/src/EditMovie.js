import axios from "axios";
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom";

function EditMovieComp () {

  const params = useParams(); 
  const navigate = useNavigate();
  
  const [movie, setMovie] = useState({name: "", premiereYear: 0, generes: [""], image: ""});
  const [genres, setGenres] = useState([]);

  useEffect(() =>
  {
    async function getMovieData()
    {
        let movieid = params.id;
        let resp = await axios.get("http://localhost:8000/api/movie/" + movieid);
        setMovie(resp.data);
        setGenres(resp.data.generes);
    }
    getMovieData();
  }, [])


  const customSubmit = (e) =>
  {
    e.preventDefault()
  }

  const  updateMovie = async () =>
  {
    let movieid = params.id;
    await axios.put("http://localhost:8000/api/movie/" + movieid, movie)
    navigate("/mainpage")
  }

  const goToAllMovies = () =>
  {
      navigate("/mainpage") 
  }


    return (
      <div>
        
        <h3 style={{textAlign: "left"}}>Edit Movie's Info: {movie.name}</h3>

        <form onSubmit={customSubmit} style={{textAlign: "left"}}>
        
            Movie Title: <input type="text" value={movie.name} onChange={e => setMovie({...movie, name: e.target.value})} />  <br/>
            Genres: <input type="text" value={movie.generes} onChange={e => setMovie({...movie, ...genres, generes: e.target.value})} />  <br/>
            Image URL: <input type="text" value={movie.image} onChange={e => setMovie({...movie, image: e.target.value})} /> <br/>
            Premiere Year: <input type="number" min="1900" value={movie.premiereYear} onChange={e => setMovie({...movie, premiereYear: e.target.value})} /> <br/><br/>

            <button onClick={updateMovie}>Update</button> &nbsp;
            <button onClick={goToAllMovies}>Cancel</button>

        </form>

  
      </div>
    );
  }
  
  export default EditMovieComp