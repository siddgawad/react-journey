import { useSetRecoilState } from "recoil";
import { taskAtom } from "../atom/taskAtom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const TaskInput = ()=>{
    const [input,setInput] = useState<string>("");
    const navigate = useNavigate();
    const tasks = useSetRecoilState(taskAtom)

    function handleSubmit(e:React.FormEvent){
        e.preventDefault();
        tasks(prev=>[...prev,input]);
        setInput("");
        navigate("/list");



    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="enter task" value={input} onChange={(e)=>setInput(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}