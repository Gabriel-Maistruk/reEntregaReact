import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


import CartItemCounter from "./CartItemCounter";

const CartElement = () => {
    const { cart, setCart } = useContext(CartContext);

    const deleteProduct = (id) => {
        const foundId = cart.find ((element) => element.id === id);

        const newCart = cart.filter((element) => {
            return element !== foundId;
        });
        setCart(newCart);
    };
    return cart.map((Product) => {
        return(
            <div className='cartContent' key={Product.id}>
                <img src={Product.img} alt="prodcut-card" />
                <h3 className='name'>{Product.name}</h3>
                <CartItemCounter product ={Product} />
                <h4 className='price'>{Product.price * Product.quanty}$</h4>
                <h5 className='cart-delete-button' onClick={()=> deleteProduct(Product.id)}>
                <DeleteOutlineIcon />
                </h5>
            </div>
        )
    })
};

export default CartElement;