import { useRecoilValue } from "recoil";
import { allTasksSelector } from "../selector/allTasksSelector";
import { useNavigate } from "react-router-dom";

export const AllTasks = ()=>{
    const tasks = useRecoilValue(allTasksSelector);
    const navigate = useNavigate();

    function goToCompleted(){
        navigate("/complete")
    }

    return(
        <div>
            <h2>All Tasks</h2>
            <ul>
                {tasks.map((i,index)=>(
                    <li key={index}>{i.task} - {i.priority} - {i.completed}</li>
                ))}
            </ul>
            <button onClick={goToCompleted}>Filter Completed Tasks</button>
        </div>
    )
}