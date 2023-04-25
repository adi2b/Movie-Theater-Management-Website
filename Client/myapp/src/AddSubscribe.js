import {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';

function AddSubscribeComp (props) {

  const dispatch = useDispatch();   

  const [newSubsribe, setNewSubscribe] = useState({movieID: "", memberID: props.memberId, date: 0})   
  const [movieData, setMovieData] = useState([])                      
  


    useEffect(() =>
    {
      async function getData()
      {
          let resp = await axios.get("http://localhost:8000/api/movie");
          setMovieData(resp.data)                  

      } 
      getData();
    }, [])


    const subscribe = () =>
    {
        dispatch({type: "ADD", payload: newSubsribe})
    }


    return (
      <div style={{width: "350px", border: "solid 2px red"}}>
        
                {
                  <div>
                    <h5>Add a new Movie</h5>

                    <select onChange={e => setNewSubscribe({...newSubsribe, movieID: e.target.value})}> 
                          {
                            movieData.map(x => 
                              {
                                return <option key={x._id} value={x._id}>{x.name}</option>
                              })                   
                          }

                    </select>     &nbsp;

                    <input type="date" onChange={e => setNewSubscribe({...newSubsribe, date: e.target.value})}/> <br/> 
                    <button onClick={subscribe}>Subscribe</button>  <br/><br/>

                  </div>
                }    

      </div>
    ); 
  }
  
  export default AddSubscribeComp
  