export default function Form({todoData,setTodoData,handleSubmit,editMode,currentTodo,setCurrentTodo,saveEdit}){
    
    function handleChange(e){
        setTodoData({...todoData,[e.target.name]:e.target.value})
    }

    function handleEdit(e){
        setCurrentTodo({...currentTodo,[e.target.name]:e.target.value})
    }


    return(
        <div>
            
            {editMode?(<>
                <div>
                <h1>Edit Todo</h1>
            </div>
            <h2>Title</h2>
            <input name="title"  value={currentTodo.title} onChange={(e)=>handleEdit(e)}  />
            <h2>Description</h2>
            <textarea value={currentTodo.description} name="description" onChange={(e)=>handleEdit(e)}  />
                <div>
                    <button onClick={saveEdit}>Save</button>
                </div>
            
            </>):(<>
                <div className="max-w-md mx-auto mt-12 bg-white shadow-lg rounded-xl p-8 ">
                <h1>Todo App</h1>
            </div>
                <h2>Title</h2>
            <input name="title" placeholder="eg:- create new CRUD app, update notes" value={todoData.title} onChange={(e)=>handleChange(e)}  />
            <h2>Description</h2>
            <textarea value={todoData.description} name="description" onChange={(e)=>handleChange(e)} placeholder="eg:- Wrote the backend for solana app - need work on frontend"  />
                <div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </>)}
           
        </div>
    )
}