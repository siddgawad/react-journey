import { useResetRecoilState } from "recoil";
import { usernameAtom } from "../atoms/authAtom";
import { useNavigate } from "react-router-dom";

export const Dashboard = ()=>{
    const navigate = useNavigate();
    const resetUsername = useResetRecoilState(usernameAtom);
    function handleReset(){
        resetUsername();
        navigate("/");

    }
return(
    <div>
        <button onClick={handleReset}>Logout</button>
    </div>
)

}