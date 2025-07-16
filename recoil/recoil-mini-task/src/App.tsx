import { RecoilRoot } from "recoil";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";

export default function App(){
  return(
    <RecoilRoot>
      <BrowserRouter>
      <Routes>
        <Route path = "/input" element={<TaskInput />} />
        <Route path ="/list" element={<TaskList />} />
      </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}