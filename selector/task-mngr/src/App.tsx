import { RecoilRoot } from "recoil";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { AllTasks } from "./components/allTasks";
import { HighTasks } from "./components/highTasks";
import { TaskInputForm } from "./components/taskInputForm";
import { TasksCompleted } from "./components/tasksCompleted";


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