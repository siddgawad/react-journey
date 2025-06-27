import type { Note } from "../types";
import NotesItem from "./NotesItem";

type Props={
    notes: Note[],
    onDelete:(id:number)=>void;
}

const NotesList=({notes,onDelete}:Props)=>{
    return(
        <div>
            {notes.map((note)=>(
                <div>
                    <NotesItem key={note.id} onDelete={onDelete} note={note} />
                </div>
            ))}
        </div>
    )
}

export default NotesList;