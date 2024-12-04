/* APP.TSX
################################### Restaurant Functional Module ###################################
/src/App.tsx    ::: primary application container
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

/*
todo: -responsiveness: header
todo: -responsiveness: hamburger menu
todo: -responsiveness: cart system: main menu
todo: -responsiveness: cart system: cart
todo: -responsiveness: cart system: product detail page
todo: ****create footer

todo: local storage for Cart
todo: payment for cart
todo: submit pickup/delivery order
todo: -category filters; dropdown menu from 'Menu'
todo: news/blog from json
todo: **restaurant name and logo
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