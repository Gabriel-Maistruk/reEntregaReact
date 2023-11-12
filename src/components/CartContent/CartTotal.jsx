import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartTotal = () => {
    const { cart } = useContext(CartContext);

    const total = cart.reduce ((acc, el) => acc + el.price * el.quanty, 0);
    return <div className='cartTotal'>
        <h3>
            TOTAL: {total} $
        </h3>
    </div>
}

export default CartTotal;