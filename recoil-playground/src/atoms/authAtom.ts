import {atom} from "recoil";

export const usernameAtom = atom<string|null>({
    key:"usernameAtom", default: localStorage.getItem("username") || null,
    effects_UNSTABLE:[
        ({setSelf,onSet})=>{
            const saved = localStorage.getItem("recoil_username");
            if(saved!=null) setSelf(JSON.parse(saved));

            onSet(newValue=>{
                if(newValue===null){
                    localStorage.removeItem("recoil_username");
                }else{
                    localStorage.setItem("recoil_username",JSON.stringify(newValue))
                }
            })
        }
    ]
});

