/* APP.TSX
################################### Restaurant Functional Module ###################################
/src/App.tsx    ::: primary application container
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import './App.css';
import {createContext, useEffect, useReducer} from "react";
import { reducerFn} from "./cart/reducer";
import {Home} from "./cart/pages/Menu";
import { Route, Routes} from 'react-router-dom';
import {ProductDetail} from "./cart/pages/ProductDetail";
import {Layout} from "./layout";
import Cart from "./cart/pages/Cart";
import {initialState} from "./cart/reducer/index.tsx";
import {ActionInterface, StateInterface} from "./globalTypes.tsx";
import {Toaster} from "react-hot-toast";

export const ctx = createContext<{
    state: StateInterface;
    dispatch: React.Dispatch<ActionInterface>; }>({
        state: initialState,
        dispatch: () => null
    }
);

function App() {
    const [state, dispatch] = useReducer(reducerFn, initialState);

    useEffect(() => {
        fetch("/public/products/products.json")
            .then(res => res.json())
            .then(data => dispatch({type: "ADD_PRODUCTS", payload: data}));
    }, [])
    return (
        <ctx.Provider value={{state, dispatch}}>
            <div className="App">
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
                <Layout>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='products/:title' element={<ProductDetail />} />
                            <Route path='cart' element={<Cart />} />
                        </Routes>
                </Layout>
            </div>
        </ctx.Provider>
    )
}

export default App