import {selector} from "recoil";
import { cartAtom } from "../atom/cartAtom";

export const expensiveItemsCount = selector({
    key:"expensiveItemsCount",
    get:({get})=>{
        const cart = get(cartAtom);
        return cart.filter(item=>item.price>50).length //since we want to display number of items w price>50
    }
})