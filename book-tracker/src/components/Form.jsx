function BookForm({ bookData, setBookData, onSubmit, editMode, onCancel }) {
    function handleChange(e) {
      setBookData({ ...bookData, [e.target.name]: e.target.value });
    }
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          {editMode ? 'Edit Book' : 'Add New Book'}
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={bookData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter book title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Author
            </label>
            <input
              type="text"
              name="author"
              value={bookData.author}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter author name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Genre
            </label>
            <input
              type="text"
              name="genre"
              value={bookData.genre}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter genre (optional)"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={onSubmit}
              className="flex-1 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              {editMode ? 'Update Book' : 'Add Book'}
            </button>
            {editMode && (
              <button
                onClick={onCancel}
                className="flex-1 bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
  