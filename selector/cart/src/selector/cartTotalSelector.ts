import {selector} from "recoil";
import { cartAtom } from "../atom/cartAtom";

export const cartTotalSelector = selector({
    key:"cartTotalSelector",
    get:({get})=>{
        const cart = get(cartAtom);
        return cart.reduce((acc,item)=>acc+item.price,0);
    }

});
