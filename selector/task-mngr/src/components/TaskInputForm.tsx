import { useSetRecoilState } from "recoil";
import { taskAtom } from "../atom/taskAtom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const TaskInputForm = ()=>{
    const [task,setTask] = useState("");
    const [priority,setPriority] = useState<"high"|"medium"|"low">("low");
    const [completed,setCompleted] = useState<"true"|"false">("false");
    const taskSet = useSetRecoilState(taskAtom);
    const navigate = useNavigate();

    function handleSubmit(e:React.FormEvent){
        e.preventDefault();
        taskSet(prev=>[...prev,{task,priority,completed}]);
        navigate("/alltasks");

    }

    return(
        <div>
            <h2>Task Form </h2>
              <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Task" value={task} onChange={(e)=>setTask(e.target.value)} />
            <select value={priority} onChange={(e)=>setPriority(e.target.value as "high"|"medium"|"low")}>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <select value={completed} onChange={(e)=>setCompleted(e.target.value as "true"|"false")}>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
            <button type="submit">Submit</button>
        </form>
        </div>
      
    )

}