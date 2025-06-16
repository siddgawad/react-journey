import Form from "./components/Form";
import Table from "./components/Table";
import { useState } from "react";

export default function App(){
  const [submissions,setSubmissions] = useState([]);
  const [movieData,setMovieData] = useState({name:"",genre:"",rating:""});
  const [showTable,setShowTable] = useState(false);



  function handleSubmit(){
    setSubmissions([...submissions,movieData]);
    setMovieData({name:"",genre:"",rating:""});
    setShowTable(true);
  }

  return(
    <div>
       {showTable?(<Table movieData={submissions} onBack={()=>setShowTable(false)}/>)
       :(<Form movieData={movieData} setMovieData={setMovieData} onSubmit={handleSubmit}/>)}
    
    </div>
   
  )
}