import { createContext, useState } from "react";

export const CartContext = createContext ();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const buyProducts = (Product) =>{
        const productTrepeat = cart.find((item) => item.id === Product.id );

        if(productTrepeat){
            setCart(cart.map((item) => (item.id === Product.id ? {...Product, quanty: productTrepeat.quanty + 1} : item )));
        }else {
            setCart([...cart, Product]);
        }
    };

    return (
        <CartContext.Provider value={{cart, setCart, buyProducts}}> {children} </CartContext.Provider>
    )
};

export default CartProvider