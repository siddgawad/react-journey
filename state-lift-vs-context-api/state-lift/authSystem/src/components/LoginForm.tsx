import {useState} from "react";

type LoginProps ={
    onLogin:(user:string|null)=>void;
}

export function LoginForm({onLogin}:LoginProps){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    function handleSubmit(e:React.FormEvent){
        e.preventDefault();
        if(username&&password){
            onLogin(username)
        }

    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}