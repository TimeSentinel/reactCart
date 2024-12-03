/* CART PAGE
################################### Restaurant Functional Module ###################################
/src/pages/Cart/index.tsx    ::: Cart Page
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import {useContext} from "react";
<<<<<<<< HEAD:src/pkg-Cart/pages/Cart/index.tsx
import {CartItem} from "src/pkg-Cart/containers/Cart";
import {ctx} from "src/context";
========
import {CartItem} from "../../containers/Cart";
import {ctx} from "../../../App.tsx";
>>>>>>>> origin/master:src/cart/pages/Cart/index.tsx
import toast from "react-hot-toast";

const Cart: React.FC = () => {
    const state = useContext(ctx).state
    const activeCart  = state?.shoppingCart || []
    const dispatch = useContext(ctx).dispatch

    const emptyCart = () => {

            dispatch({
                type: "EMPTY_CART",
                payload: {id: 0, quantity: 0}
            })
        toast.success("CART EMPTIED!")
    }

    return (
        <>
            <div className="cartHeader">
                <div className="cartLeft">
<<<<<<<< HEAD:src/pkg-Cart/pages/Cart/index.tsx
                    <h1>Your Cart...</h1>
                </div>
                <hr className="cartLine"/>
========
                <h1>Your Cart...</h1>
                </div>
>>>>>>>> origin/master:src/cart/pages/Cart/index.tsx
                <div className="cartRight">
                    <button onClick={emptyCart}>
                        EMPTY CART
                    </button>
                </div>
            </div>
            <div className="cartTable" >
                <div className="cartTableHeader">
                    <div className="cartTableHeaderItem column1">Item</div>
                    <div className="cartTableHeaderItem column2">Category</div>
                    <div className="cartTableHeaderItem column3">Price</div>
                    <div className="cartTableHeaderItem column4"></div>
                    <div className="cartTableHeaderItem column5">Quantity</div>
                    <div className="cartTableHeaderItem column6">Total</div>
                </div>
                {Object.keys(activeCart).length ? (
                    <>
<<<<<<<< HEAD:src/pkg-Cart/pages/Cart/index.tsx
                        {Object.keys(activeCart).map(id => (
                            <CartItem id={Number(id)} key={id}/>
========
                        {Object.keys(activeCart).map(id  => (
                            <CartItem id={Number(id)} key={id} />
>>>>>>>> origin/master:src/cart/pages/Cart/index.tsx
                        ))}
                    </>
                ) : (
                    <h3>Cart Is Empty</h3>
                )}
            </div>

            <div className="cartTotal">TOTAL = $</div>
            <hr className="cartLine"/>
            <div className="cartFooter">
                <h3>Place Order</h3>
            </div>
        </>
    )
}


export default Cart;
