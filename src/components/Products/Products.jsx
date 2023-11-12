import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import axios from "axios";
/*TODO LO COMENTADO ES PARTE DEL FIREBASE, NO ME FUNCIONO, A PESAR DE SEGUIR PASO POR PASO LA GRABACION DE LA CLASE, ES ALGO A MEJORAR  */
// import { collection, getDocs, getFirestore } from 'firebase/firestore';

import "./Products.css";

const Products = () => {
    const [data, setData] = useState([]);
    const { buyProducts } = useContext(CartContext);
    // const [ newProduct, setNewProduct ] = useState()


/*     useEffect(() => {
        const db = getFirestore();

        const productCollection= collection(db, 'productos')
        getDocs(productCollection).then((snapshot) => {
            setNewProduct(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        })
    },[])

    console.log('holaaa', newProduct) */


    useEffect (() => {
        axios("data.json").then((res) => setData(res.data));
    }, []);

    return data.map((Product) => {
        return (
            <div className='card' key={Product.id}>
                <img src={Product.img} alt='img-products-card' />
                <h3>{Product.name}</h3>
                <h4>{Product.price}$</h4>
                <button onClick={()=> buyProducts(Product) }>
                    AGREGAR AL CARRITO
                </button>
            </div>
        )
    })
};

export default Products;