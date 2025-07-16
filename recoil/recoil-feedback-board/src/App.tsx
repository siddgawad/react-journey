
import { FeedbackInput } from "./components/FeedbackInput";
import { FeedbackList } from "./components/FeedbackList";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

export default function App(){
  return(
    <RecoilRoot>
       <BrowserRouter>
    <Routes>
      <Route path="/input" element={<FeedbackInput />}/>
      <Route path="/list" element={<FeedbackList />} />
    </Routes>
    </BrowserRouter>
    </RecoilRoot>
   
  )
}