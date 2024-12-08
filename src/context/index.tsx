/* CONTEXT
################################### Restaurant Functional Module ###################################
/src/context/stateReducers.tsx    ::: application context container
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import {createContext} from "react";
import {initialState, StateInterface, ActionInterface} from "../reducer/stateReducers.tsx";
import {initialLocalState, LocalStateInterface, LocalActionInterface} from "../reducer/localStateReducers.tsx";

export const ctx = createContext<{
    state: StateInterface;
    dispatch: React.Dispatch<ActionInterface>;
    localState: LocalStateInterface;
    localDispatch: React.Dispatch<LocalActionInterface>;
}>({
        state: initialState,
        dispatch: () => null,
        localState:  initialLocalState,
        localDispatch: () => null,
    }
);