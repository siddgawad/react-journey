import {useRecoilValue} from "recoil";
import { cartTotalSelector } from "../selector/cartTotalSelector";
import { expensiveItemsCount } from "../selector/expensiveItemsCount";
import { useNavigate } from "react-router-dom";

export const CartStats= ()=>{
    const total = useRecoilValue(cartTotalSelector);
    const expensiveCount = useRecoilValue(expensiveItemsCount);
    const navigate = useNavigate();

    function returnForm(){
        navigate("/form")
    }

    return(
        <div>
            <h3>Cart Summary</h3>
            <p>Total Price: ${total}</p>
            <p>Number of items over $50: {expensiveCount}</p>
            <button onClick={returnForm}>Return to Form</button>
        </div>
    )
}