type Props = {
    id:number,url:string,title:string
};

export const BookmarkItem = ({id,title,url}:Props)=>{
    return(
        <li key={id}>
            <a href ={url} target="_blank" rel="noopener noreferrer">{title}</a>
        </li>
    );
};