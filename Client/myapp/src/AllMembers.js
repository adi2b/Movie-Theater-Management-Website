import {useState, useEffect} from 'react'
import axios from 'axios';
import MemberComp from './Member';


function AllMembersComp(){

  const [membersId, setMembersId] = useState([]);

  useEffect (() =>
  {
    async function getMembersId()
    {
      let resp = await axios.get("http://localhost:8000/api/member");
      setMembersId(resp.data.map(x =>x._id));
    }
    getMembersId();
  }, [])

    return (
      <div>
        {
          membersId.map(x =>
            {
              return <MemberComp key={x} memberId={x} />
              
            }) 
        }
  
      </div>
    ); 
}
  
  export default AllMembersComp;
  