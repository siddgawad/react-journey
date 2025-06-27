
import { BookmarkItem } from "./BookmarkItem";
import { Bookmark } from "./types";

type Props = {
    bookmarks: Bookmark[];
};

export const BookmarkList = ({bookmarks}:Props)=>{
    return(
        <ul>
            {bookmarks.map((bookmark)=>(
                <BookmarkItem key={bookmark.id} id={bookmark.id} title={bookmark.title} url={bookmark.url} />
            ))}
        </ul>
    )
}   