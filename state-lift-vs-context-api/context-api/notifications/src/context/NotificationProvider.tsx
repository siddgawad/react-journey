import { useState } from "react";
import { NotificationContext } from "./NotificationContext";

export const NotificationProvider = ({children}:{children:React.ReactNode})=>{
    const [message,setMessage] = useState<string|null>(null);
    const notify = (msg:string) =>{
        setMessage(msg);
        setTimeout(()=>{
            setMessage(null)
        },3000)
    }

    return(
       <NotificationContext.Provider value={{message,notify}}>
        {children}
       </NotificationContext.Provider>
    )
}