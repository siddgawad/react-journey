import { useState } from "react";
import { feedbackAtom } from "../atom/feedbackAtom";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

export const FeedbackInput = ()=>{
    const [input,setInput] = useState<string>("");
    const feedback = useSetRecoilState(feedbackAtom);
    const navigate = useNavigate();

    function handleSubmit(e:React.FormEvent){
        e.preventDefault();
        feedback(prev=>[...prev,input])
        setInput("");
        navigate("/list");
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <textarea placeholder="enter feedback" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}