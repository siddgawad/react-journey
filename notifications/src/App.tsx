import { useState } from "react";
import bellIcon from "../src/assets/bellIcon.svg";
import { DropDown } from "./components/dropDown";

export default function App(){
  const [notification,setNotification] = useState([{
    id:1,message:"You have a new connection request", notifRead: false},{
    id:2,message:"you have  a new message from Sundar Pichai",notifRead:false
  }])
  const [dropdownStaste,setDropDownState] = useState(false);

  function handleDropdown(){
    setDropDownState((prev)=>!prev)
  }

  function markAsRead(id){
    const notifToUpdate  = notification.find((notif)=>notif.id===id);
    if(notifToUpdate){
      notifToUpdate.notifRead = true;
      setNotification({...notification,notifToUpdate})
    }
  }

  return(
    <div>
      <nav>
        <div>
          <button onClick={()=>handleDropdown()}><img src={bellIcon} alt="notification" width="24px" height="24px"/></button>
        </div>
      </nav>
      {dropdownStaste?(<>
      <DropDown notifications={notification} />
      </>):(<>
      
      </>)}

    </div>
  )
}