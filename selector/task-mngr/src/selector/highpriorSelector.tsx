import {selector} from "recoil";
import { taskAtom } from "../atom/taskAtom";

export const highpriorSelector = selector({
    key:"highpriorSelector",
    get:({get})=>{
        const tasks = get(taskAtom);
        return tasks.filter((t)=>t.priority==="high");
    }
})