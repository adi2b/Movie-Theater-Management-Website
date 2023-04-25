import {useEffect, useState} from 'react';
import axios from 'axios';
import {Outlet, useNavigate} from "react-router-dom";
import MemberWatchedMoviesComp from './MemberWatchedMovies';
import { useDispatch } from 'react-redux';

function MemberComp (props) {

   const [memberData, setMemberData] = useState([])
   const navigate = useNavigate();
   const dispatch = useDispatch();

   useEffect(() =>
   {
     async function getMemberData()
     {
         let resp = await axios.get("http://localhost:8000/api/member/" + props.memberId);
         setMemberData(resp.data)
     } 
     getMemberData();
   }, [])


    const goToEditMembers = () =>
    {
        navigate("editMember/" + props.memberId) 
    }

    const deleteMember = async () =>
    {
        dispatch({type: "DELETE_BY_MEMBERID", payload: props.memberId})

        await axios.delete("http://localhost:8000/api/member/" + props.memberId)
        alert("Member's information has been deleted successfully.")
        window.location.reload(false);
    }


    return ( 
        <div>
      <div style={{width: "500px", border: "solid 2px green"}}>

        <h4>{memberData.name}</h4>
        Email: {memberData.email} <br/>
        City: {memberData.city} <br/>

        <button onClick={goToEditMembers}>Edit</button> &nbsp;
        <button onClick={deleteMember}>Delete</button> <br/><br/> 

        <MemberWatchedMoviesComp key={props.memberId} memberId={props.memberId}/> <br/>

      </div> <br></br>
      </div>
    ); 
  } 
  
  export default MemberComp
  