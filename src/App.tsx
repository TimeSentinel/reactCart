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
todo: *contact page
todo: *about us page

todo: payment for cart
todo: submit pickup/delivery order
todo: -category filters; dropdown menu from 'Menu'
todo: news/blog from json
todo: restaurant name and logo
todo: social media links
todo: news, Cart from database
todo: cms admin login
todo: user accounts: login, user page, user settings, theme, etc
todo: user accounts: order history, billing info
todo: check local storage for old/corrupt setup and clear or modify as needed

 */

// Style Sheets
import './App.css';
// Application Elements
import {useEffect, useReducer} from "react";
import {Route, Routes} from 'react-router-dom';
import {Toaster} from "react-hot-toast";
// Classes and Functions
import {ctx} from './context';
import {Layout} from "./layout";
import {initialState, reducerFn} from "./reducer/stateReducers.tsx";
import {useLocalStorage} from "./reducer/localStateReducers.tsx";
import {Home} from "./modules/Menu/pages/Menu";
import {ProductDetail} from "./modules/Menu/pages/ProductDetail";
import Cart from "./modules/Cart/pages/Cart";



function App() {
    const [state, dispatch] = useReducer(reducerFn, initialState);
    const [localState, localDispatch] = useLocalStorage("ShoppingCart")


    // ------------------------------ CART MODULE CODE ------------------------------
    useEffect(() => {
        fetch("/products/products.json")
            .then(res => res.json())
            .then(data => dispatch({type: "ADD_PRODUCTS", payload: data}));
    }, [])

    // ------------------------------ END CART MODULE ------------------------------

    return (
        <ctx.Provider value={{state, dispatch, localState, localDispatch}}>
            <div className="App">
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='products/:title' element={<ProductDetail/>}/>
                        <Route path='cart' element={<Cart/>}/>
                    </Routes>
                </Layout>
            </div>
        </ctx.Provider>
    )
}

export default App