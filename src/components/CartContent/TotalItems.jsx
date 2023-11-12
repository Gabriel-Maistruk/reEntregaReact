import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const TotalItems = () => {
    const { cart } = useContext(CartContext);

    const itemsQuanty = cart.reduce((acc, el) => acc + el.quanty, 0);
return <span className='cart-items-total'>{itemsQuanty}</span>;

};

export default TotalItems;