import {useState} from "react";
import Form from "./components/Form";
import Table from "./components/Table";

export default function App(){
  const [data,setData] = useState({name:"",age:"",gender:"",subscription:"",pet:""});
  const [submission,setSubmission] = useState([]);
  const [showState,setShowState] = useState(false);

function handleSubmit(){
  setSubmission([...submission,data]);
  setData({name:"",age:"",gender:"",subscription:"",pet:""})
  setShowState(true);
}

  return(
    <div>
      {showState?(<Table submission={submission} onBack={()=>setShowState(false)}/>)
      :(<Form data ={data} setData={setData} onSubmit={handleSubmit} />)}
    </div>
  )
}