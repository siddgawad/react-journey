import {useEffect, useState} from "react";

function App(){
  return <div>
    <b>hi there</b>
    <Counter />
  </div>
}

function Counter(){
  const [count,setCount] = useState(0);
console.log("Inside counter component");

useEffect(function(){
  setInterval(function(){
    setCount(c => c + 1);
  },1000)
  console.log("Mounted");
},[]);





  


  return(
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default App