import {useState, useEffect} from 'react'
import axios from 'axios';
import MovieComp from './Movie';

function AllMoviesComp(){

  const [moviesId, setMoviesId] = useState([]);
  const [moviesData, setMoviesData] = useState([]);
  
  const [searchMovie, setSearchMovie] = useState(""); 
  const [isExist, setIsExist] = useState(false);  

  useEffect (() =>
  {

    async function getMoviesId()
    {
      let resp = await axios.get("http://localhost:8000/api/movie");
      setMoviesData(resp.data)
      setMoviesId(resp.data.map(x =>x._id));

    }
    getMoviesId();

  }, [])

  const findMovieByName = () => 
  {
    if(searchMovie == "")
    {
      setIsExist(false);
      alert("Please enter text before pushing the button.")
    }

    else
    {
     setIsExist(true);
   }
  }

    return (
      <div>

        Find Movies: <input onChange={e => setSearchMovie(e.target.value)} type="text"/>   &nbsp;    
        <button onClick={findMovieByName}>Find</button> <br/><br/>   

        { 
          !isExist &&
          <div>
            {
                    moviesId.map(x =>
                      {
                        return <MovieComp key={x} movieId={x} />    
                      }) 
            }
          </div>
        }

        {
          isExist &&
              <div>
              {
                moviesData.filter(movie => movie.name.includes(searchMovie)).map(movie =>
                  {
                    return <MovieComp key={movie._id} movieId={movie._id} />
                  })
              }
              </div>
        }

      </div>
    ); 
}  
  export default AllMoviesComp;
