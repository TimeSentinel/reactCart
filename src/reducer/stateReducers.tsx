/* REDUCERS
################################### Restaurant Functional Module ###################################
/src/reducer/stateReducers.tsx    ::: Reducers
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

export interface StateInterface {
    products: ProductInterface[];
}

export interface ActionInterface {
    type: string;
    payload: unknown;
}

export interface ProductInterface {
    id: string;
    category: string;
    title: string;
    description: string;
    price: number;
    image: string;
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

