
import type {Todo} from "../../types";

interface Props {
    todo: Todo
    onToggle:(id:number)=>void
    onDelete:(id:number)=>void;
}

export const TodoItem = ({todo,onToggle,onDelete}:Props)=>{
    
    return(
        <div>
         <li className="flex items-center gap-2">
            <span className={todo.isDone?"line-through":""}>
                {todo.task}
            </span>
            <button onClick={()=>onToggle(todo.id)}>
                {todo.isDone? "Undo":"Done" }
            </button>
            <button onClick={()=>onDelete(todo.id)}>Delete</button>
         </li>
        </div>
    )
}

