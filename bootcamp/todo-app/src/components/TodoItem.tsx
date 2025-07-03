
import type {Todo} from "../../types";

interface Props {
    todo: Todo
    onToggle:(id:number)=>void
}

export const TodoItem = ({todo,onToggle}:Props)=>{
    
    return(
        <div>
         <li className="flex items-center gap-2">
            <span className={todo.isDone?"line-through":""}>
                {todo.task}
            </span>
            <button onClick={()=>onToggle(todo.id)}>
                {todo.isDone? "Undo":"Done" }
            </button>
         </li>
        </div>
    )
}