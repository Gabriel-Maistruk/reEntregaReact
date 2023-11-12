import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const CartItemCounter = ({product}) => {
    const { cart, setCart, buyProducts } = useContext(CartContext);

    const decrese = () =>{
        const productTrepeat = cart.find((item) => item.id === product.id );

        productTrepeat.quanty !== 1 && 
        setCart(cart.map((item) => (item.id === product.id ? {...product, quanty: productTrepeat.quanty - 1} : item )));
    }
return (
    <>
        <p className='counter-button' onClick={decrese}>
        <RemoveCircleOutlineIcon />
        </p>
        <p> {product.quanty} </p>
        <p className='counter-button' onClick={()=> buyProducts(product)}>
            <AddCircleOutlineIcon />
        </p>
    </>
);
}

export default CartItemCounter