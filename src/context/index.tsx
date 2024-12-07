/* CONTEXT
################################### Restaurant Functional Module ###################################
/src/context/stateReducers.tsx    ::: application context container
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import {createContext} from "react";
import {ActionInterface} from "../globalTypes.tsx";
import {initialState, StateInterface} from "../modules/Cart/reducer/stateReducers.tsx";
import {initialLocalState, LocalStateInterface} from "../modules/Cart/reducer/localStateReducers.tsx";

export const ctx = createContext<{
    state: StateInterface;
    dispatch: React.Dispatch<ActionInterface>;
    localState: LocalStateInterface;
    localDispatch: React.Dispatch<ActionInterface>;
}>({
        state: initialState,
        dispatch: () => null,
        localState: initialLocalState,
        localDispatch: () => null
    }
);