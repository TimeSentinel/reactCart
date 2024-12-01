/* CONTEXT
################################### Restaurant Functional Module ###################################
/src/context/index.tsx    ::: menu context wrapper
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import {createContext} from "react";
import { StateInterface } from "../globalTypes"

export const ctx = createContext<StateInterface | null>(null);