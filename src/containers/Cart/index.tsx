/* CART Container
################################### Restaurant Functional Module ###################################
/src/containers/Cart/index.tsx    ::: cart container
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import "./Cart.css"
import {CartInterface} from "../../globalTypes.tsx";
import {useNavigate} from "react-router-dom";
import {useReducer} from "react";
import {initialState, reducerFn} from "../../reducer";

const CartItem = ({id, title, category, price, quantity}: CartInterface) => {
    const [state, dispatch] = useReducer(reducerFn, initialState);
    console.log(state);
    const navigate = useNavigate();
    const handleClick = () => navigate(`/products/${title.trim()}`)
    const handleAdd = () => {
        dispatch({type: "ADD_TO_CART", payload: []})
    }
    const handleMinus = () => {
        dispatch({type: "SUBTRACT_FROM_CART", payload: []})
    }

    return (
        <div className="cartCard" key={id}>
            <div className="cartTitle" onClick={handleClick}>
                {title}
            </div>
            <div className="cartCategory">{category}</div>
            <div className="cartPrice">${price}</div>
            <div className="column4"></div>
            <div className="cartButton">
                <button className="cartInc" onClick={handleAdd}>+</button>
                <div className="cartQty">{quantity | 0}</div>
                <button className="cartDec" onClick={handleMinus}>-</button>
            </div>
            <div className="cartLineTotal">${(price * quantity) | 0}</div>
        </div>
    )
}

export {CartItem}