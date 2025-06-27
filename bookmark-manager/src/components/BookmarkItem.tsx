import { Bookmark } from "../types";
type Props = {bookmark:Bookmark;
onDelete:(id:number)=>void;
}

export const BookmarkItem = ({bookmark,onDelete}:Props)=>{
    return(
        <li className="flex justify-between items-center mb-2" key={bookmark.id} >
            <a href ={bookmark.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{bookmark.title}</a>
            <button onClick = {()=>onDelete(bookmark.id)} className="ml-4 text-red-600">X</button>
        </li>
    );
};