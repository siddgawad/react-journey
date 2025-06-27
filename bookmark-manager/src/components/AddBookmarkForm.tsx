import React, {useState} from "react";

type Props = {
    onAdd:(title:string,url:string)=>void;
};

export const AddBookmarkForm = ({onAdd}:Props)=>{
    const [title,setTitle] = useState("");
    const [url,setUrl] = useState("");

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault();
        if(!title.trim()||!url.trim()) return alert("Fill both fields");
        onAdd(title.trim(),url.trim());
        setTitle("");
        setUrl("");
    };
    return(
        <form onSubmit={handleSubmit}>
            <input value={title} placeholder="Title" onChange={(e)=>setTitle(e.target.value)} />
            <input value={url} placeholder="URL" onChange={(e)=>setUrl(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    )

}