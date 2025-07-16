import {atom} from "recoil";

export const feedbackAtom = atom<string[]>({
    key:"feedbackAtom",default:[]
})