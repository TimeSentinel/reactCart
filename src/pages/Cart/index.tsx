/* CART PAGE
################################### Restaurant Functional Module ###################################
/src/pages/Cart/index.tsx    ::: Cart Page
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import {StateInterface} from "../../globalTypes.tsx";
import {useContext} from "react";
import {ctx} from "../../context";
import {CartItem} from "../../containers/Cart";

const Cart: React.FC = () => {
    const state = useContext(ctx) as StateInterface

    return (
        <>
            <div className="cartHeader">
                <h1>Your Cart...</h1>
            </div>
            <div className="cartTable">
                <div className="cartTableHeader">
                    <div className="cartTableHeaderItem column1">Item</div>
                    <div className="cartTableHeaderItem column2">Category</div>
                    <div className="cartTableHeaderItem column3">Price</div>
                    <div className="cartTableHeaderItem column4"></div>
                    <div className="cartTableHeaderItem column5">Quantity</div>
                    <div className="cartTableHeaderItem column6">Total</div>
                </div>
                {state.shoppingCart.length ? (
                    <>
                        {state.shoppingCart.map(product => (
                            <CartItem id={product.id} title={product.title} price={product.price}
                                      category={product.category}
                                      quantity={product.quantity}/>
                        ))}
                    </>
                ) : (
                    <h3>Cart Is Empty</h3>
                )}
            </div>
        </>
    )
}


export default Cart;
