/* APP.TSX
################################### Restaurant Functional Module ###################################
/src/App.tsx    ::: primary application container
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import './App.css';
import {useEffect, useReducer} from "react";
import {ctx} from "./context";
import { reducerFn} from "./reducer";
import {Home} from "./pages/Menu";
import { Route, Routes} from 'react-router-dom';
import {ProductDetail} from "./pages/ProductDetail";
import {Layout} from "./layout";
import Cart from "./pages/Cart";
import {initialState} from "./reducer/index.tsx";


function App() {
    const [state, dispatch] = useReducer(reducerFn, initialState);
    //console.log("State", state);

    useEffect(() => {
        fetch("/public/products/products.json")
            .then(res => res.json())
            .then(data => dispatch({type: "ADD_PRODUCTS", payload: data}));
    }, [])
    return (
        <ctx.Provider value={state}>
            <div className="App">

                <Layout>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='products/:title' element={<ProductDetail dispatch={dispatch}/>} />
                            <Route path='cart' element={<Cart />} />
                        </Routes>
                </Layout>
            </div>
        </ctx.Provider>
    )
}

export default App