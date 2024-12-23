/* REDUCERS
################################### Restaurant Functional Module ###################################
/src/reducer/localStateReducers.tsx    ::: Reducers for local storage state
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import React, {useEffect, useReducer} from "react";
import {ThemeInterface} from "../modules/Themes";

//region ---vv-------- interfaces --------vv---
export interface LocalStateInterface {
    shoppingCart: CartInterface;  // Cart Module
    cssName: ThemeInterface;  // Themes Module
}

export interface LocalActionInterface {
    type: string;
    payload: unknown;
}

interface CartReducerInterface {  // Cart Module
    id: number;
    quantity: number;
}

interface CartInterface {  // Cart Module
    [id: string]: number;
}

export const initialLocalState: LocalStateInterface = {
    shoppingCart: {},  //Cart Module
    cssName: {  // Themes Module - Default Theme
        uuid: "6c7c7457-399b-4eac-9e8b-f05e477b7601",
        name: "Default",
        text: "black",
        background: "white"
    },
}
//endregion
// ------------------------------------------------

export const useLocalStorage: (storageKey: string) => [LocalStateInterface, React.Dispatch<LocalActionInterface>] = (storageKey: string) => {
    const [value, setValue] = useReducer(localReducerFn,
        JSON.parse(localStorage.getItem(storageKey) || JSON.stringify(initialLocalState)) as LocalStateInterface
    );

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
};

const localReducerFn = (state: LocalStateInterface, action: LocalActionInterface) => {
    // console.log("localReducerFN")
    const {type, payload} = action
    switch (type) {
        case "ADD_TO_CART": {  // Cart Module
            const newCart = state.shoppingCart
            if (!((payload as CartReducerInterface).id in newCart))
                newCart[(payload as CartReducerInterface).id] = 1;

            return {
                ...state,
                shoppingCart: newCart as CartInterface
            }
        }

        case "UPDATE_CART": {  // Cart Module
            const newCart = state.shoppingCart
            if ((payload as CartReducerInterface).id in newCart) {
                newCart[(payload as CartReducerInterface).id] = (payload as CartReducerInterface).quantity;
            } else {
                newCart[(payload as CartReducerInterface).id] = 1;
            }
            return {
                ...state,
                shoppingCart: (newCart as CartInterface)
            }
        }
        case "REMOVE_ITEM": {  // Cart Module
            const newCart = state.shoppingCart
            delete newCart[(payload as CartReducerInterface).id]
            return {
                ...state,
                shoppingCart: (newCart as CartInterface)
            }
        }
        case "EMPTY_CART": // Cart Module
            console.log("EMPTY_CART")

            return {
                ...state,
                shoppingCart: {}
            }
        case "CSS_NAME": // Themes Module
            return  {
                ...state,
                cssName: (payload as ThemeInterface)
            }
        default:
            return state
    }
}


