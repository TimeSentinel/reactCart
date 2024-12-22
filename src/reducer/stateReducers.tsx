/* REDUCERS
################################### Restaurant Functional Module ###################################
/src/reducer/stateReducers.tsx    ::: Reducers
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

export interface StateInterface {
    products: ProductInterface[];
    cssStyle: string;
}

export interface ActionInterface {
    type: string;
    payload: unknown;
}

export interface ProductInterface {
    id: string;
    type: string;
    category: string;
    title: string;
    description: string;
    price: number;
    image: string;
}

export const initialState: StateInterface = {
    products: [],
    cssStyle: "",
}

export const reducerFn = (state: StateInterface, action: ActionInterface) => {
    const {type, payload} = action
    switch (type) {
        case "ADD_PRODUCTS":
            return {
                ...state,
                products: (payload as ProductInterface[])
            }
        case "UPDATE_CSS":
            return {
                ...state,
                cssStyle: (payload as string)
            }
        default:
            return state
    }
}

