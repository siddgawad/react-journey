import { RecoilRoot } from "recoil";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { TaskInputForm } from "./components/TaskInputForm";
import { AllTasks } from "./components/AllTasks";
import { HighTasks } from "./components/HighTasks";
import { TasksCompleted } from "./components/TasksCompleted";


export default function App(){
  return(
    <RecoilRoot>
      <BrowserRouter>
      <Routes>
        <Route path="/form" element={<TaskInputForm />} />
        <Route path="/alltasks" element={<AllTasks />} />
        <Route path="/complete" element ={<TasksCompleted />} />
        <Route path = "/highprior" element={<HighTasks />} />
      </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}