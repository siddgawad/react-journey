import type { Note } from "../types";

type Prop= {note:Note,onDelete:(id:number)=>void};

const NotesItem = ({note,onDelete}:Prop)=>{
    return(
        <div>
            <ul>
                <li key={note.id}><h3>{note.title}</h3><p>{note.description}</p></li>
                <button onClick={()=>onDelete(note.id)}>X</button>
            </ul>
        </div>
    )
}

export default NotesItem;