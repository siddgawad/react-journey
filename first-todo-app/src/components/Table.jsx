export default function Table({ submission, onBack, onEdit, onDelete }) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Your Todos</h2>
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="bg-zinc-800">
              <th className="p-3 rounded-l-lg">Title</th>
              <th className="p-3">Description</th>
              <th className="p-3 rounded-r-lg">Actions</th>
            </tr>
          </thead>
          <tbody>
            {submission.map((t) => (
              <tr key={t.id} className="bg-zinc-700 hover:bg-zinc-600 transition">
                <td className="p-3">{t.title}</td>
                <td className="p-3">{t.description}</td>
                <td className="p-3">
                  <button
                    onClick={() => onEdit(t)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded-lg text-sm font-medium"
                  >
                    Edit
                  </button>
                  <button
    onClick={() => onDelete(t.id)}
    className="ml-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm font-medium"
  >
    Delete
  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <button
          onClick={onBack}
          className="mt-6 w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition font-semibold"
        >
          Go Back
        </button>
      </div>
    );
  }
  