import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";



export default function App(){
  const [todoData,setTodoData] = useState({title:"",description:""});
  const [submission,setSubmission] = useState([]);
  const [currentTodo,setCurrentTodo] = useState({title:"",description:""});
  const [editMode,setEditMode] = useState(false);
  const [showState,setShowState] = useState(false);


  function saveEdit(){
    const updatedArray = submission.map((todo)=>todo.id===currentTodo.id?{...todo,title:currentTodo.title,description:currentTodo.description}:todo);
    setSubmission(updatedArray);
    setShowState(true);
    setEditMode(false); 
    setCurrentTodo({title:"",description:""});
    
  }

  function handleSubmit(){
    const newTodo = {...todoData,id:Date.now().toString()};
    setSubmission([...submission,newTodo]);
    setShowState(true);
    setTodoData({ title: "", description: "" });
  }

  function onBack(){
    setTodoData({title:"",description:""});
    setShowState(false);
    setCurrentTodo({ title: "", description: "" });
  }

  function onEdit(id){
    const todo = submission.find((todo)=>todo.id===id);
    setCurrentTodo(todo);
    setEditMode(true);
    setShowState(false);
  }

  function onDelete(id){
    const updatedArray = submission.filter((todo)=>todo.id!==id);
    setSubmission(updatedArray);

  }

return(
  <>
  <div>
    {showState?(<Table submission={submission} onBack={onBack} onEdit={onEdit} onDelete={onDelete}  />):
    (<Form todoData={todoData} setTodoData= {setTodoData} handleSubmit ={handleSubmit} 
    editMode= {editMode} currentTodo={currentTodo} setCurrentTodo ={setCurrentTodo} saveEdit={saveEdit} />)}
  </div>
  </>
)
}