// src/pages/Cart/index.tsx

import {Product} from "../../containers/Product";
import {StateInterface} from "../../globalTypes.tsx";
import {useContext} from "react";
import {ctx} from "../../context";


const Cart: React.FC = () => {
    const state = useContext(ctx) as StateInterface

    return (
        <>
            {state.shoppingCart.length ? (
                <>
                    {state.shoppingCart.map(product => (
                        <Product title={product.title} price={product.price} category={product.category} quantity={product.quantity} />
                    ))}
                </>
            ) : (
                <h2>Cart Is Empty</h2>
            )}


        </>
    )
}


export default Cart;
