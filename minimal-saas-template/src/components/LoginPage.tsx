import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { useState} from "react";

export const LoginPage = ()=>{
const {login} = useAuth();
const [name,setName] = useState("")
const [password,setPassword] = useState("")
const navigate = useNavigate();


async function handleSubmit(e:React.FormEvent){
    e.preventDefault();
    login(name);
    navigate("/dashboard");
  
}

return(
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit">Submit</button> 
    </form>
)
}