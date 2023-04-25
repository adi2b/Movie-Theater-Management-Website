import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function LoginComp () {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({username: "", password: ""});

  useEffect(() =>
  {
    async function getUsersData()
    {
      let resp = await axios.get("http://localhost:8000/api/user");
      setUsers(resp.data)
    }
    getUsersData();
  }, [])

  const login = () =>
  {

    let dbComparedUser = users.find(x => x.username === user.username)

    if(dbComparedUser.password === user.password)
    {
      sessionStorage["logedUser"] = dbComparedUser.name;
      navigate("/mainpage")
    }
    else
    {
      alert("Your username and/or password are incorrect. Please Try again.")
    }
  }


  return (
    <div>
      
        <h3>Log-in Page</h3> <br/>

        User Name : <input type="text" onChange={e => setUser({...user, username : e.target.value}) } /> <br/><br/>

        Password : <input type="text" onChange={e => setUser({...user, password : e.target.value}) } /> <br/><br/>

        <input type="button" onClick={login} value="Login" />

    </div>
  );
}

export default LoginComp
