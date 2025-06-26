import React, {useEffect, useState} from "react";
import BookmarkCard from "./components/Bookmark";


type Bookmark = {
  id:number,
  title:string,
  url:string
}

export default function App(){
  const [bookmarks,setBookmarks] = useState<Bookmark[]>([]);
  const [title,setTitle] = useState("");
  const [url,setUrl] = useState("");
  const firstLoad = React.useRef(true);
  const formatUrl = (url:string)=>{
    const trimmed = url.trim();
    if(trimmed.startsWith("https://")||trimmed.startsWith("https://")){
      return trimmed;
    }
    return `https://${trimmed}`;
  }

  const formatTitle =(title:string)=>title.trim();

  const domainExtensions =[".com",".in",".co",".ca"];

  const addBookmark=()=>{
    if(!title.trim()||!url.trim()){
      alert("url and title should not be empty");
      return;
    }if(!domainExtensions.some(ext=>url.endsWith(ext))){
      alert("Invalid url detected");
      return;
    }

    const newBookmark: Bookmark ={
      id:Date.now(),title:formatTitle(title),url:formatUrl(url)
    };

    setBookmarks([...bookmarks,newBookmark]);
    setTitle("");
    setUrl("");
  };
  const deleteBookmark = (id:number)=>{
    setBookmarks(bookmarks.filter(bookmark=>bookmark.id!==id));
  };

  // Load bookmarks
useEffect(() => {
  const saved = localStorage.getItem("bookmarks");
 
  if (saved) {
    setBookmarks(JSON.parse(saved) as Bookmark[]);
  }
}, []);

// Save bookmarks
useEffect(() => {
  if(firstLoad.current){
    firstLoad.current=false;
    return; 
  }

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}, [bookmarks]);


  return(
    <div style={{padding:20}}>
      <h1>
        Bookmark Manager
      </h1>
      <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      <input placeholder="URL" value={url} onChange={e=>setUrl(e.target.value)} />
      <button onClick={addBookmark}>Add</button>
      <ul>
        {bookmarks.map(bookmark=>(
       <BookmarkCard
       key={bookmark.id}
       id={bookmark.id}
       title={bookmark.title}
       url={bookmark.url}
       onDelete={deleteBookmark}
     />
        ))}
      </ul>
    </div>
  )
}