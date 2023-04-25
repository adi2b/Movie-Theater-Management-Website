import axios from "axios";
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom";

function EditMemberComp () {

  const params = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState({});

  useEffect(() =>
  {
    async function getMemberData()
    {
        let memberid = params.id;
        let resp = await axios.get("http://localhost:8000/api/member/" + memberid);
        setMember(resp.data);
    }
    getMemberData();
  }, [])


  const customSubmit = (e) =>
  {
    e.preventDefault()
  }

  const  updateMember = async () =>
  {
      let memberid = params.id;
      await axios.put("http://localhost:8000/api/member/" + memberid, member)
      navigate("/mainpage/subscriptions")
  }

  const goToAllMembers = () =>
  {
      navigate("/mainpage/subscriptions") 
  }

    return (
      <div>
        
        <h3 style={{textAlign: "left"}}>Edit Member Info: {member.name}</h3>

        <form onSubmit={customSubmit} style={{textAlign: "left"}}>
        
            &nbsp; Name: <input type="text" value={member.name} onChange={e => setMember({...member, name: e.target.value})}/> <br/>
            &nbsp; Email: <input type="text" value={member.email} onChange={e => setMember({...member, email: e.target.value})}/> <br/> 
            &nbsp; City: <input type="text" value={member.city} onChange={e => setMember({...member, city: e.target.value})}/> <br/><br/>

            &nbsp;    <button onClick={updateMember}>Update</button> &nbsp;
                  <button  onClick={goToAllMembers}>Cancel</button> 

        </form>

  
      </div>
    );
  }
  
  export default EditMemberComp
