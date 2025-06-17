import {useState} from "react";
import Table from "./components/Table";
import Modal from "./components/Modal";

export default function App(){
  const [todoData,setTodoData] = useState({title:"",description:""});
  const [submission,setSubmission] = useState([]);
  const [showState,setShowState] = useState(false);
  const [editMode,setEditMode] = useState(false);
  const [editId,setEditId] = useState(null);

  function onSubmit() {
    if (editMode) {
      // Edit existing
      setSubmission(prev =>
        prev.map(t =>
          t.id === editId ? { ...todoData, id: editId } : t
        )
      );
      setEditMode(false);
      setEditId(null);
    } else {
      // Add new
      const newTodo = {
        id: crypto.randomUUID(),
        title: todoData.title,
        description: todoData.description,
      };
      setSubmission(prev => [...prev, newTodo]);
    }
  
    // Reset
    setTodoData({ title: "", description: "" });
    setShowState(true);
  }

  function handleEdit(todo){
    setTodoData({ title: todo.title, description: todo.description });
    setEditId(todo.id);
    setEditMode(true);
    setShowState(false);
  }

  function handleDelete(id) {
    setSubmission(prev => prev.filter(todo => todo.id !== id));
  }
  

  return(
    <div className="min-h-screen bg-gradient-to-r from-slate-900 via-gray-900 to-black text-white flex items-center justify-center p-4">
  <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-2xl bg-zinc-900 rounded-2xl shadow-2xl p-6 sm:p-8">
    {showState ? (
      <Table 
        submission={submission}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onBack={() => {
          setShowState(false);
          setEditMode(false);
          setEditId(null);
        }}
      />
    ) : (
      <Modal
        todoData={todoData}
        setTodoData={setTodoData}
        onSubmit={onSubmit}
        isEditMode={editMode}
      />
    )}
  </div>
</div>

  )
}