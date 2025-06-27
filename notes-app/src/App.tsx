import { useState,useEffect,useRef } from "react";
import NotesList from "./components/NotesList";
import type { Note } from "./types";

export default function App() {
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, title: "First Note", description: "This is your first note." }
  ]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const firstLoad = useRef(true);

  useEffect(()=>{
    if(!firstLoad.current){
      localStorage.setItem("notes",JSON.stringify(notes))
    }

  },[notes]);

  useEffect(()=>{
    if(firstLoad.current){
      const saved = localStorage.getItem("notes");
    if(saved){
      setNotes(JSON.parse(saved))
    }
      firstLoad.current=false;
    }
    
  },[])

  const addNote = () => {
    if (!title.trim() || !description.trim()) return alert("Fill both fields!");
    const newNote: Note = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    };
    setNotes([...notes, newNote]);
    setTitle("");
    setDescription("");
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Notes App</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 flex-1 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border p-2 flex-1 rounded"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-4 rounded"
          onClick={addNote}
        >
          Add
        </button>
      </div>

      <NotesList notes={notes} onDelete={deleteNote} />
    </div>
  );
}
