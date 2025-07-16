import { useNavigate } from "react-router-dom"

export const Homepage = ()=>{
    const navigate = useNavigate();

    function goToLogin(){
        navigate("/login")
    }

    return(
        <div>
            Helllo Page is here wohoo!
            <button onClick={goToLogin}>Go to login page</button>
        </div>
    )
}