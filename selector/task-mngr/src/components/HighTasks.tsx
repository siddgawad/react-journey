import { useRecoilValue } from "recoil";
import { highpriorSelector } from "../selector/highpriorSelector";
import { useNavigate } from "react-router-dom";

export const HighTasks = ()=>{
    const tasks = useRecoilValue(highpriorSelector);
    const navigate = useNavigate();
    
    function goToForm(){
        navigate("/form")
    }

    return(
        <div>
            <h2>High Priority Tasks</h2>
            <ul>
                {tasks.map((t,index)=>(
                    <li key={index}>{t.task}</li>
                ))}
            </ul>
            <button onClick={goToForm}>Return To Form</button>
        </div>
    )
}