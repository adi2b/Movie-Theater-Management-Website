import { useState, useEffect } from "react";
import {Outlet, useNavigate} from "react-router-dom";
import axios from 'axios';
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";

function MainpageComp () {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const[userName, setUserName] = useState("")

    useEffect(() =>
    {
      let user = sessionStorage["logedUser"];
      setUserName(user)

      async function getSubscribesData()
      {
        let resp = await axios.get("http://localhost:8000/api/subscription");
        let subscriptions = resp.data
  
        dispatch({type: "LOAD", payload: subscriptions})
      }
      getSubscribesData();
    },[])

    const goToMovies = () =>
    {
        navigate("") 
    }

    const goToSubs = () =>
    {
        navigate("subscriptions")
    }

    const toLogout = () =>
    {
        navigate("/");
    }

  return (
    <div>
      
      <h3>Hello {userName} - Welcome back to Management website!</h3>
      
      <Button onClick={goToMovies} variant="contained" size="small">Movies</Button> &nbsp;
      <Button onClick={goToSubs} variant="contained" size="small">Subscriptions</Button>  &nbsp;
      <Button onClick={toLogout} variant="contained" size="small">Log Out</Button>  &nbsp;

      <br/> <br/>



    <Outlet />



    

    </div>
  );
}

export default MainpageComp
