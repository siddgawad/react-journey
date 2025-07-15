import { useState } from "react"
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";


export const LoginPage = ()=>{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const {login} = useAuth();
    const navigate = useNavigate();

    function handleSubmit(e:React.FormEvent){
        
        e.preventDefault();
        login(username);
        navigate("/dashboard");
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}