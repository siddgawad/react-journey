import { useState,useEffect } from "react";
import BookTable from "./components/Table";
import BookForm from "./components/Form";

export default function App() {
  const [books, setBooks] = useState([]);
  const [bookData, setBookData] = useState({ title: '', author: '', genre: '' });
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedBooks = localStorage.getItem('bookTracker');
    if (savedBooks) {
      try {
        setBooks(JSON.parse(savedBooks));
      } catch (error) {
        console.error('Error loading books from localStorage:', error);
      }
    }
  }, []);

  // Save to localStorage whenever books change
  useEffect(() => {
    localStorage.setItem('bookTracker', JSON.stringify(books));
  }, [books]);

  // Handle form submission (add or edit)
  function handleSubmit() {
    if (!bookData.title.trim() || !bookData.author.trim()) {
      alert('Please fill in both title and author');
      return;
    }

    if (editMode) {
      // Update existing book
      setBooks(books.map(book => 
        book.id === editingId 
          ? { ...book, ...bookData }
          : book
      ));
    } else {
      // Add new book
      const newBook = {
        ...bookData,
        id: Date.now(),
        isFavorite: false
      };
      setBooks([...books, newBook]);
    }

    // Reset form and states
    setBookData({ title: '', author: '', genre: '' });
    setShowForm(false);
    setEditMode(false);
    setEditingId(null);
  }

  // Handle edit button click
  function handleEdit(id) {
    const bookToEdit = books.find(book => book.id === id);
    setBookData({
      title: bookToEdit.title,
      author: bookToEdit.author,
      genre: bookToEdit.genre || ''
    });
    setEditMode(true);
    setEditingId(id);
    setShowForm(true);
  }

  // Handle delete
  function handleDelete(id) {
    if (window.confirm('Are you sure you want to delete this book?')) {
      setBooks(books.filter(book => book.id !== id));
    }
  }

  // Toggle favorite status
  function handleToggleFavorite(id) {
    setBooks(books.map(book =>
      book.id === id
        ? { ...book, isFavorite: !book.isFavorite }
        : book
    ));
  }

  // Cancel editing
  function handleCancel() {
    setBookData({ title: '', author: '', genre: '' });
    setShowForm(false);
    setEditMode(false);
    setEditingId(null);
  }

  // Show form for adding new book
  function handleShowForm() {
    setShowForm(true);
    setEditMode(false);
    setEditingId(null);
    setBookData({ title: '', author: '', genre: '' });
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">📚 Book Tracker</h1>
          <p className="text-gray-600">Keep track of your favorite books</p>
        </header>

        {showForm ? (
          <BookForm
            bookData={bookData}
            setBookData={setBookData}
            onSubmit={handleSubmit}
            editMode={editMode}
            onCancel={handleCancel}
          />
        ) : (
          <BookTable
            books={books}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onToggleFavorite={handleToggleFavorite}
            onShowForm={handleShowForm}
          />
        )}
      </div>
    </div>
  );
}