/* REDUCERS
################################### Restaurant Functional Module ###################################
/src/reducer/index.tsx    ::: Reducers
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import {StateInterface, ActionInterface, ProductInterface, CartInterface} from "../../globalTypes.tsx"

interface cartReducerInterface {
    id: number;
    quantity: number;
}

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

        case "ADD_TO_CART": {
            const newCart = state.shoppingCart
            if (!((payload as cartReducerInterface).id in newCart))
                newCart[(payload as cartReducerInterface).id] = 1;
            return {
                ...state,
                shoppingCart: newCart as CartInterface
            }
        }

        case "UPDATE_CART": {
            const newCart = state.shoppingCart
            if ((payload as cartReducerInterface).id in newCart) {
                newCart[(payload as cartReducerInterface).id] = (payload as cartReducerInterface).quantity;
            } else {
                newCart[(payload as cartReducerInterface).id] = 1;
            }
            return {
                ...state,
                shoppingCart: newCart as CartInterface
            }
        }
        case "REMOVE_ITEM": {
            const newCart = state.shoppingCart
            delete newCart[(payload as cartReducerInterface).id]
            return {
                ...state,
                shoppingCart: newCart as CartInterface
            }
        }
        case "EMPTY_CART":
            return {
                ...state,
                shoppingCart: []
            }
        default:
            return state
    }
}

