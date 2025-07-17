import {selector} from "recoil";
import { taskAtom } from "../atom/taskAtom";

export const allTasksSelector = selector({
    key:"allTasksSelector",
    get:({get})=>{
        const tasks = get(taskAtom);
        return tasks;
    }
})