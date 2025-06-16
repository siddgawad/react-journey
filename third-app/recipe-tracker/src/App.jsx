import Form from "./components/Form";
import Table from "./components/Table";
import { useState } from "react";

export default function App(){
  const [recipeData,setRecipeData] = useState({name:"",type:"",difficulty:""});
  const [submission,setSubmission] = useState([]);
  const [showState,setShowState] = useState(false);

  function handleSubmit(){
    setSubmission([...submission,recipeData]);
    setRecipeData({name:"",type:"",difficulty:""});
    setShowState(true);
  }

  return(
    <div>
      {showState?(<Table submission={submission} onBack={()=>setShowState(false)} />):(<Form recipeData={recipeData} setRecipeData={setRecipeData} onSubmit={handleSubmit} />)}
    </div>
  )

}