/* APP.TSX
################################### Restaurant Functional Module ###################################
/src/App.tsx    ::: primary application container
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

/*
todo: menu page heading
todo: total on Cart page
todo: place order on cart page
todo: css on details page
todo: css on shopping Cart
todo: local storage for Cart
todo: payment for cart
todo: submit pickup/delivery order
todo: category filters; dropdown menu from 'Menu'
todo: news/blog from json
todo: restaurant name and log
todo: news, pkg-Cart from database
todo: cms admin login
todo: user accounts: login, user page, user settings, theme, etc
todo: user accounts: order history, billing info

 */

import './App.css';
import { ctx } from './context';
import {initialState} from "./pkg-Cart/reducer";
import { useEffect, useReducer} from "react";
import { reducerFn} from "./pkg-Cart/reducer";
import {Layout} from "./layout";
import { Route, Routes} from 'react-router-dom';
import {Home} from "./pkg-Cart/pages/Menu";
import {ProductDetail} from "./pkg-Cart/pages/ProductDetail";
import Cart from "./pkg-Cart/pages/Cart";
import {Toaster} from "react-hot-toast";


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