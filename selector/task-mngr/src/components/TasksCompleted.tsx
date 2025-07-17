import { useRecoilValue } from "recoil";
import { completedSelector } from "../selector/completedSelector";
import { useNavigate } from "react-router-dom";

export const TasksCompleted = ()=>{
    const tasks = useRecoilValue(completedSelector);
    const navigate = useNavigate();

    function goToHigh(){
        navigate("/highprior")
    }

    return(
        <div>
            <ul>
                {tasks.map((t,index)=>(
                    <li key={index}>{t.task}</li>
                ))}
            </ul>
            <button onClick={goToHigh}>Filter high priority tasks</button>
        </div>
    )

}