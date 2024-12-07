/* REDUCERS
################################### Restaurant Functional Module ###################################
/src/reducer/stateReducers.tsx    ::: Reducers
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import {ActionInterface, ProductInterface} from "../../../globalTypes.tsx"

export interface StateInterface {
    products: ProductInterface[];
}

export const initialState: StateInterface = {
    products: [],
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

