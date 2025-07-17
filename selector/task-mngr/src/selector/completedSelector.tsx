import { taskAtom } from "../atom/taskAtom";
import {selector} from "recoil";

export const completedSelector = selector({
    key:"completedSelector",
    get:({get})=>{
        const tasks = get(taskAtom);
        return tasks.filter(i=>i.completed==="true")
    }
})