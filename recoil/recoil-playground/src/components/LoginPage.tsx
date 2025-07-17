import { useSetRecoilState } from "recoil";
import { usernameAtom } from "../atoms/authAtom";
import { useState } from "react";

export const LoginPage = ()=>{
    const [name,setName] = useState("");
    const [password,setPassowrd] = useState("");


    const setUsername = useSetRecoilState(usernameAtom);
    
    function handleSubmit(e:React.FormEvent){
        e.preventDefault();
        setUsername(name)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={(e)=>setPassowrd(e.target.value)} />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}
 