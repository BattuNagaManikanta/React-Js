import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../Utils/cartSlice";

const Cart=()=>{

    const cartItems=useSelector((store)=>store?.carts?.items);
    const dispatch=useDispatch();
    return(
        
        <div className="text-center w-6/12 mx-auto">
            <button className="bg-black p-2 m-2 text-white shadow-lg" onClick={()=>dispatch(clearCart())}>ClearCart</button>
            {cartItems.length == 0 ? <h1>Cart is Empty go to home page and shop more</h1> : <ItemsList items={cartItems}/>}
        </div>
    )
}


export default Cart;