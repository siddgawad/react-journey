import { Bookmark } from "../types";
type Props = {bookmark:Bookmark;
onDelete:(id:number)=>void;
}

export const BookmarkItem = ({bookmark,onDelete}:Props)=>{
    return(
        
        <div>
            <div key={bookmark.id} className="grid grid-cols-4 gap-4 flow-col justify-stretch p-4">
                <a href={bookmark.url} className="m-2 text-black-400 hover:blue-500 underline" target="_blank" rel="noopener noreferrer">{bookmark.title}</a>
                <button className="bg-red-400 hover:bg-red-400 p-4 text-black" onClick={()=>onDelete(bookmark.id)}>X</button>
            </div>
        </div>
    );
};