import { useState,useEffect } from "react";

export default function App(){
  const [counter,setCounter] = useState(()=>{
    const saved = localStorage.getItem("counter");
    return saved? Number(saved):0;
  });

  useEffect(()=>{
    localStorage.setItem("counter",counter);
  },[counter]);


  function increaseCount(){
    setCounter(counter+1);
  }

  function decreaseCount(){
    setCounter(counter-1);
  }

  return(
    <div>
      <div><h1>Counter Application</h1></div>
      <div>
        {counter}
        <button onClick={increaseCount}>Increament</button>
        <button onClick={decreaseCount}>Decreament</button>
      </div>
    </div>
  )
}