import { useState } from "react";
import { cartAtom } from "../atom/cartAtom";
import { useSetRecoilState } from "recoil";
import {useNavigate} from "react-router-dom";

export const AddItemForm=()=>{
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const cart = useSetRecoilState(cartAtom);
    const navigate = useNavigate();

    function handleSubmit(e:React.FormEvent){
        e.preventDefault();
        cart(prev=>[...prev,{name,price:parseFloat(price)}]);
        setName("");
        setPrice("");
        navigate("/cart");
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="number" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}