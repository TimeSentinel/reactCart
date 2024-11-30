// src/reducer/index.tsx
import {StateInterface, ActionInterface, ProductInterface} from "../globalTypes.tsx"

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
            newCart.push(payload as ProductInterface)
            return {
                ...state,
                shoppingCart: newCart
            } }
        default:
            return state
    }
}