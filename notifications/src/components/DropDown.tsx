type Notification={
id:number,message:string,notifRead:boolean
}

 type DropDownProps = {
    notifications : Notification[];
 }

 export const DropDown = ({notifications}:DropDownProps)=>{
    return(
        <div className="dropdown">
            {notifications.map((notif)=>(
                <div key={notif.id} className={notif.notifRead?"read":"unread"} onClick={()=>!notifRead}>{notif.message}</div>
            ))}
        </div>
    )
 }