export default function Modal({ todoData, setTodoData, onSubmit, isEditMode }) {
    function handleChange(e) {
      setTodoData({ ...todoData, [e.target.name]: e.target.value });
    }
  
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isEditMode ? "Edit Todo" : "Add New Todo"}
        </h2>
  
        <label className="block mb-2 font-medium">Title</label>
        <input
          name="title"
          value={todoData.title}
          onChange={handleChange}
          placeholder="e.g. Learn React"
          className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg p-3 mb-6 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  
        <label className="block mb-2 font-medium">Description</label>
        <textarea
          name="description"
          value={todoData.description}
          onChange={handleChange}
          placeholder="e.g. Build a CRUD app using React and Tailwind"
          rows={4}
          className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg p-3 mb-6 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  
        <button
          onClick={onSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 px-4 rounded-lg shadow-sm"
        >
          {isEditMode ? "Update Todo" : "Submit Todo"}
        </button>
      </div>
    );
  }
  