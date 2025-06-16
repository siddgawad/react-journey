import {useState} from "react";
import ListView from "../src/components/ListView.jsx";
import FormView from "../src/components/FormView.jsx";

export default function App(){

  const [formData,setFormData] = useState({field1:"",field2:""});
  const [submissions,setSubmissions] = useState([]);
  const [showList,setShowList] = useState(false);
  
  function handleSubmit(){
    setSubmissions([...submissions, formData]);
    setFormData({ field1: "", field2: "" }); 
    setShowList(true); 
  
  }
  
  return(
    
    <div>
      {showList?(<ListView data={submissions} onBack={()=>setShowList(false)}/>)
      :(<FormView data={formData}  setData={setFormData} onSubmit={handleSubmit}/>)}
  
    </div>
    
    
  )                                                     

}
