import { useRecoilValue } from "recoil";
import { cartAtom } from "../atom/cartAtom";
import { useNavigate } from "react-router-dom";

export const Cart = ()=>{
    const cart = useRecoilValue(cartAtom);
    const navigate = useNavigate();



    if(cart.length===0) return <p>Your cart is empty</p>

    function goToCartSum(){
        navigate("/cartsum")
    }
    return(
        <div>
            <ul>
            {cart.map((item,index)=>(
                <li key={index}>{item.name} - {item.price}</li>
            ))}
        </ul>
        <button onClick={goToCartSum}>Go to Cart Sumamry</button>
        </div>
        
    )
}