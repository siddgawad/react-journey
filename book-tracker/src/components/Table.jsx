export default function BookTable({ books, onEdit, onDelete, onToggleFavorite, onShowForm }) {
    if (books.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg mb-4">No books in your collection yet</p>
          <button
            onClick={onShowForm}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Add Your First Book
          </button>
        </div>
      );
    }
  
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex justify-between items-center p-4 bg-gray-50 border-b">
          <h2 className="text-xl font-bold text-gray-800">Your Book Collection</h2>
          <button
            onClick={onShowForm}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Add New Book
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Title</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Author</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Genre</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {books.map((book) => (
                <tr key={book.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      {book.isFavorite && (
                        <span className="text-yellow-500 mr-2">★</span>
                      )}
                      <span className="font-medium text-gray-900">{book.title}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-700">{book.author}</td>
                  <td className="px-4 py-3 text-gray-700">{book.genre || 'N/A'}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        book.isFavorite
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {book.isFavorite ? 'Favorite' : 'Regular'}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => onEdit(book.id)}
                        className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onToggleFavorite(book.id)}
                        className={`px-3 py-1 rounded text-sm transition-colors ${
                          book.isFavorite
                            ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                            : 'bg-gray-500 text-white hover:bg-gray-600'
                        }`}
                      >
                        {book.isFavorite ? '★' : '☆'}
                      </button>
                      <button
                        onClick={() => onDelete(book.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-gray-50 border-t">
          <p className="text-sm text-gray-600">
            Total books: {books.length} | Favorites: {books.filter(b => b.isFavorite).length}
          </p>
        </div>
      </div>
    );
  }