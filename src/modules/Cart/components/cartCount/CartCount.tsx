/* Cart Icon
################################### Restaurant Functional Module ###################################
/modules/Cart/components/CartIcon.tsx    ::: Shopping Cart Display Icon Component
REQ: Vite-React.js+TypeScript, react-router-dom,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import {useContext} from "react";
import {ctx} from "../../../../context";
import cartIcon from "/images/cart-100.png";
import './cartCount.css'

function CartCount(){
    const localState = useContext(ctx).localState.shoppingCart

    return (
        <>
            <span className="cartCount">{Object.keys(localState).length}</span>
            <img src={cartIcon} alt="cart"/>
        </>
    )
}

export default CartCount;