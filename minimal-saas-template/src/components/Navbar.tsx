import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

export const Navbar = ()=>{
    const {username} = useAuth();
    const navigate = useNavigate();

    return(
    <div>
        {username?(<>Hi {username} <div>
            <button onClick={()=>navigate("/dashboard")}>Go to Dashboard</button>
            </div></>):(<><div><button onClick={()=>navigate("/login")}>Go To Login Page</button></div></>)}
    </div>
    )
}