/* REDUCERS
################################### Restaurant Functional Module ###################################
/src/reducer/stateReducers.tsx    ::: Reducers
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import {ActionInterface, CartInterface} from "src/globalTypes.tsx"
import {useEffect, useReducer} from "react";

export const useLocalStorage: (storageKey: string) => [LocalStateInterface, React.Dispatch<ActionInterface>] = (storageKey: string) => {
    const [value, setValue] = useReducer(localReducerFn,
        JSON.parse(localStorage.getItem(storageKey) || JSON.stringify(initialLocalState)) as LocalStateInterface
    );

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
};

interface CartReducerInterface {
    id: number;
    quantity: number;
}

export interface LocalStateInterface {
    shoppingCart: CartInterface;
}

export const initialLocalState: LocalStateInterface = {
    shoppingCart: {},
}

const localReducerFn = (state: LocalStateInterface, action: ActionInterface) => {
    const {type, payload} = action
    switch (type) {
        case "ADD_TO_CART": {
            const newCart = state.shoppingCart
            if (!((payload as CartReducerInterface).id in newCart))
                newCart[(payload as CartReducerInterface).id] = 1;

            return {
                ...state,
                shoppingCart: newCart as CartInterface
            }
        }

        case "UPDATE_CART": {
            const newCart = state.shoppingCart
            if ((payload as CartReducerInterface).id in newCart) {
                newCart[(payload as CartReducerInterface).id] = (payload as CartReducerInterface).quantity;
            } else {
                newCart[(payload as CartReducerInterface).id] = 1;
            }
            return {
                ...state,
                shoppingCart: newCart as CartInterface
            }
        }
        case "REMOVE_ITEM": {
            const newCart = state.shoppingCart
            delete newCart[(payload as CartReducerInterface).id]
            return {
                ...state,
                shoppingCart: newCart as CartInterface
            }
        }
        case "EMPTY_CART":
            return {
                ...state,
                shoppingCart: initialLocalState.shoppingCart
            }
        default:
            return state
    }
}


