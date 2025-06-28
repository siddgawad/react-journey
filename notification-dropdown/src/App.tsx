import NotificationBell from "./components/NotificationBell";
import { useState } from "react";

const initialNotifications = [
  {id:"1",text:"Welcome!",isRead:false,time:"10:30 AM"},
  {id:"2",text:"New message",isRead:false,time:"11;00 AM"}
];

export default function App(){
  const [notification,setNotification] = useState(initialNotifications);

  return(
    <div className="navbar">
      <NotificationBell/>
    </div>
  );
}

