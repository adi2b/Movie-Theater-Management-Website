import {useEffect, useState} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function AddMemberComp () {

  const navigate = useNavigate();
  const [members, setMembers] = useState([]);       // saved for future updates
  const [member, setMember] = useState({});   
  const [isValid, setIsValid] = useState(true); 

  useEffect (() =>
  {
    async function getMembers()
    {
      let resp = await axios.get("http://localhost:8000/api/member");
      setMembers(resp.data);
    }
    getMembers();
  }, [])

  const saveMember = async () =>
  {
    if(member.name == "")  
    {
      setIsValid(false);
    }
    else
    {
      setIsValid(true);
    
      await axios.post("http://localhost:8000/api/member", member)        
      navigate("/mainpage/subscriptions")
    }
  }

  const  customSubmit = (e) =>
  {
    e.preventDefault()
  }

  const goToAllMembers = () =>
  {
      navigate("/mainpage/subscriptions") 
  }

    return (
      <div>
        
        <h3 style={{textAlign: "left"}}> &nbsp; Add a New Member:</h3>

        <form onSubmit={customSubmit} style={{textAlign: "left"}}>

        &nbsp;    Member's Name: <input type="text" onChange={e => setMember({...member, name: e.target.value})}/> <br/>
        &nbsp;    Email: <input type="text" onChange={e => setMember({...member, email: e.target.value})}/> <br/> 
        &nbsp;    City: <input type="text" onChange={e => setMember({...member, city: e.target.value})}/> <br/><br/>

        &nbsp;    <button onClick={saveMember}>Save</button> &nbsp;
            <button  onClick={goToAllMembers}>Cancel</button> <br/> <br/>

                   {
                    !isValid && <span>Please fill new member's name before saving.</span>
                   }


        </form>

  
      </div>
    );
  }
  
  export default AddMemberComp