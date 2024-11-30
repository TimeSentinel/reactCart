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

        default:
            return state
    }
}