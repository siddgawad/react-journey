import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

export const Dashboard = ()=>{
    const {logout} = useAuth();
    const navigate = useNavigate();

    function handleClick(){
        logout();
        navigate("/");
    }
    
    return(
        <div>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}