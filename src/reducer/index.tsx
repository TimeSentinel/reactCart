/* REDUCERS
################################### Restaurant Functional Module ###################################
/src/reducer/index.tsx    ::: Reducers
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import {StateInterface, ActionInterface, ProductInterface, CartInterface} from "../globalTypes.tsx"

export const initialState: StateInterface = {
    products: [],
    shoppingCart: []
}

export const reducerFn = (state: StateInterface, action: ActionInterface) => {
    const {type, payload} = action
    switch (type) {
        case "ADD_PRODUCTS":
            return {
                ...state,
                products: payload as ProductInterface[]
            }

        case "ADD_TO_CART":
        { const newCart = state.shoppingCart
            if newCart[id] !== undefined &&
            newCart.push(payload as CartInterface)
            return {
                ...state,
                shoppingCart: newCart as CartInterface[]
            }}
        case "SUBTRACT_FROM_CART":
        { const newCart = state.shoppingCart
            newCart.push(payload as CartInterface)
            return {
                ...state,
                shoppingCart: newCart
            } }
        case "EMPTY_CART":
        { const newCart = state.shoppingCart
            newCart.push(payload as CartInterface)
            return {
                ...state,
                shoppingCart: newCart
            } }
        default:
            return state
    }
}

