import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

import CartElement from "./CartElement";
import CartTotal from "./CartTotal";
import Navbar from "../Navbar/Navbar";

import "./CartContent.css"

const CartContent = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
            <Navbar />
            {cart.length > 0 ? (
                <>
                    <CartElement />
                    <CartTotal />
                </>
            ) : (
                <h2 className='cart-message-center'>SU CARRITO ESTA VACIO.</h2>
            )}
        </>
    )
}



export default CartContent;