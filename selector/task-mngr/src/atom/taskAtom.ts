import {atom} from "recoil";

export const taskAtom = atom({
    key:"taskAtom", default:[{task:"Complete selectors",priority:"high",completed:"false"},
        {task:"Complete amazon cart",priority:"high",completed:"false"}
    ]
})