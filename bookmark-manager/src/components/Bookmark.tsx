
type Props = {
    id:number,title:string,url:string,onDelete:(id:number)=>void;
}

 const BookmarkCard = ({id,title,url,onDelete}:Props)=>{
return(
    <div style={{border:"1px solid #ccc", borderRadius:"8px", padding:"12px",  marginBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",}}>
<div>
    <a href={url} target="_blank" rel="noopener noreferrer" style={{fontWeight:"bold",color:"#007bff",textDecoration:"none"}}>
{title}
    </a>
    <button onClick={()=>onDelete(id)} style={{
          marginLeft: "16px",
          backgroundColor: "#ff4d4f",
          color: "#fff",
          border: "none",
          padding: "6px 10px",
          borderRadius: "4px",
          cursor: "pointer",
        }}>Delete</button>
</div>
            
        </div>
)
}

export default BookmarkCard;
