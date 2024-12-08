/* CART Container
################################### Restaurant Functional Module ###################################
Module: Cart
/modules/Cart/containers/Cart/stateReducers.tsx    ::: cart container
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import "./Cart.css"
import {useContext} from "react";
import {ProductInterface} from 'src/reducer/stateReducers';
import {ctx} from "src/context";
import toast from "react-hot-toast";

interface CartProps {
    id: string;
}

const CartItem = ({id}: CartProps) => {
    const state = useContext(ctx).state
    const localDispatch = useContext(ctx).localDispatch
    const shoppingCart = useContext(ctx).localState.shoppingCart
    // const setShoppingCart = useContext(ctx).localDispatch
    const activeProducts = state?.products || []
    const product: ProductInterface = activeProducts.find(
        product => product.id === (id)
    ) as ProductInterface
    const rowTitle = product.title
    const rowCategory = product.category
    const rowPrice = product.price

    const addClick = (row: string) => {
        if (!(row in shoppingCart)) {
            localDispatch({
                type: "ADD_TO_CART",
                payload: {id: row, quantity: 1}
            })
        } else {
            const curCount = shoppingCart[row] || 0
            localDispatch({
                type: "UPDATE_CART",
                payload: {id: row, quantity: (curCount + 1)}
            })
        }
    }

    const minusClick = (row: string) => {
        if (!(row in shoppingCart)) {
            toast.error("Failed to Reduce Quantity!")
        } else if (shoppingCart[row] === 1) {
            localDispatch({
                type: "REMOVE_ITEM",
                payload: {id: row, quantity: 0}
            })
        } else {
            const curCount = shoppingCart[row] || 0
            localDispatch({
                type: "UPDATE_CART",
                payload: {id: row, quantity: (curCount - 1)}
            })
        }
    }

    return (
        <div className="cartCard" key={id}>
            <div className="cartDelete">
                <button className="cartButton" onClick={() => localDispatch({type: "REMOVE_ITEM", payload: {id}})}>
                    X
                </button>
            </div>
            <div className="cartTitle">
                {rowTitle ?? ""}
            </div>
            <div className="cartCategory">{rowCategory ?? ""}</div>
            <div className="cartPrice">
                {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(rowPrice) ?? 0}
            </div>
            <div className="column4"></div>
            <div className="cartButton">
                <button className="cartInc" onClick={() => addClick(id)}>+</button>
                <div className="cartQty">{shoppingCart[id] | 0}</div>
                <button className="cartDec" onClick={() => minusClick(id)}>-</button>
            </div>
            <div className="cartLineTotal">
                {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(((rowPrice) * (shoppingCart[id]))) ?? 0}
            </div>
        </div>
    )
}

export {CartItem}