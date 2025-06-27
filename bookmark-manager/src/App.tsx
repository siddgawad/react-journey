import { useEffect, useState,useRef } from "react";
import { Bookmark } from "./types";
import { BookmarkList } from "./components/BookmarkList";

const formatUrl = (url: string) => {
  const trimmed = url.trim();
  return trimmed.startsWith("http") ? trimmed : `https://${trimmed}`;
};

export default function App() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const firstLoad = useRef(true);

  const addBookmark = () => {
    if (!title.trim() || !url.trim()) {
      alert("Enter valid title and URL");
      return;
    }

    const newBookmark: Bookmark = {
      id: Date.now(),
      title: title.trim(),
      url: formatUrl(url),
    };

    setBookmarks([...bookmarks, newBookmark]);
    setTitle("");
    setUrl("");
  };

  const deleteBookmark = (id: number) => {
    setBookmarks(bookmarks.filter((b) => b.id !== id));
  };

  useEffect(() => {
    if(firstLoad.current){
      firstLoad.current = false;
      const saved = localStorage.getItem("bookmarks");
      if (saved) {
        setBookmarks(JSON.parse(saved));
      }
    }
    
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Bookmark Manager</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 flex-1 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && title.trim()) {
              addBookmark(
                
              )
            }
          }}
        />
        <input
          className="border p-2 flex-1 rounded"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && url.trim()) {
              addBookmark(

              )
            }
          }}
        />
        <button onClick={addBookmark} className="bg-blue-500 text-white px-4 rounded">
          Add
        </button>
      </div>

      <BookmarkList bookmarks={bookmarks} onDelete={deleteBookmark} />
    </div>
  );
}
