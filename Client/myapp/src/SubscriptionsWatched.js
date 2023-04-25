import {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

function SubscriptionsWatchedComp (props) {

  const storeData = useSelector(state => state)

  const [membersData, setMemebrsData] = useState([])

    useEffect(() =>
    {
      async function getData()
      {

        let resp = await axios.get("http://localhost:8000/api/member");
        setMemebrsData(resp.data)

      } 
      getData();
    }, [])


    return (
      <div style={{width: "300px", border: "solid 2px red"}}>
        
        <h5>Subscriptions Watched</h5>


        <ul>
        {
            storeData.filter(x => x.movieID === props.movieId).map(sub =>
              {
                return <li key={sub.memberID} value={sub.memberID}> 
                  
                    {membersData.filter(x => x._id == sub.memberID).map(x =>
                      {   
                      return <a href={"/mainpage/subscriptions/editMember/"+sub.memberID} key={x._id} value={x._id}>{x.name}</a>
                      })}
                    
                , {sub.date}
                </li>
              })
          }    
        </ul>


      </div>
    ); 
  }
  
  export default SubscriptionsWatchedComp
  