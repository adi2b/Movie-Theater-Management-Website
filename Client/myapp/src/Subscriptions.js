import {Outlet, useNavigate} from "react-router-dom";

function SubscriptionsComp () {

  const navigate = useNavigate();

  const presentAllMembers = () =>
  {
      navigate("") 
  }

  const goToAddMember = () =>
  {
      navigate("addMember")
  }

    return (
      <div style={{width: "800px", border: "solid 2px blue"}}>
        
        <h3>Subscriptions</h3>

        <button onClick={presentAllMembers}>All Members</button> &nbsp;
        <button onClick={goToAddMember}>Add a Member</button> &nbsp;

        <br/><br/>
      


      <Outlet />

      <br/>
  
      </div> 
    );
  }
  
  export default SubscriptionsComp
  