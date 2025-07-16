import { useNavigate } from "react-router-dom";

export const HomePage = ()=>{
    const navigate = useNavigate();

    function clickPage(){
        navigate("/login");
    }

    return(
        <div>
            <h1>Hello welcome to my app</h1>
            <button onClick={clickPage}>Go To Login</button>
        </div>
    )
}