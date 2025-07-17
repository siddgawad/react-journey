import { RecoilRoot } from "recoil";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { AddItemForm } from "./components/AddItemForm";
import { Cart } from "./components/Cart";
import { CartStats } from "./components/cartStats";

export default function App(){
  return(
    <RecoilRoot>
      <BrowserRouter>
      <Routes>
        <Route path = "/form" element={<AddItemForm />} />
        <Route path = "/cart" element={<Cart />} />
        <Route path = "/cartsum" element={<CartStats />} />
      </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}