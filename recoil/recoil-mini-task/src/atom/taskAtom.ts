import {atom} from "recoil";

export const taskAtom = atom<string[]>({
    key:"taskAtom",
    default:[]
})