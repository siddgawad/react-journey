import {atom} from "recoil";

export const cartAtom = atom ({
    key:"cartAtom", default:[
        {name:"Shirt",price:30},{name:"Shoes",price:50}
    ]
});
