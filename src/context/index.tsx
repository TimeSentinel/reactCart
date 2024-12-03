/* CONTEXT
################################### Restaurant Functional Module ###################################
/src/context/index.tsx    ::: application context container
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import {createContext} from "react";
import {ActionInterface, StateInterface} from "../globalTypes.tsx";
import {initialState} from "../pkg-Cart/reducer";

export const ctx = createContext<{
    state: StateInterface;
    dispatch: React.Dispatch<ActionInterface>; }>({
        state: initialState,
        dispatch: () => null
    }
);
