
import { BookmarkItem } from "./BookmarkItem";
import { Bookmark } from "../types";

type Props = {
    bookmarks: Bookmark[];
    onDelete:(id:number)=>void;
};

export const BookmarkList = ({bookmarks,onDelete}:Props)=>{
    return(
        <ul>
            {bookmarks.map((b)=>(
                <BookmarkItem key={b.id} bookmark={b} onDelete={onDelete}/>
            ))}
        </ul>
    )
}   