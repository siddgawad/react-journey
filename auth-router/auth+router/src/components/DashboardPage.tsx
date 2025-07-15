import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

export const DashboardPage =()=>{
    const {logout} = useAuth()
    const navigate = useNavigate();
    return(
        <>
        <button onClick={()=>{
            logout();
            navigate("/login")
        }}>
            Logout
        </button>
        </>
    )
}