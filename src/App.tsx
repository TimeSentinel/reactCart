/* APP.TSX
################################### Restaurant Functional Module ###################################
/src/App.tsx    ::: primary application container
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

/*

todo: ask Aiden about the searchParam delay issue

todo: NAVBAR - add click to open for 'Menu'
todo: MENU - meal type sub-headings
todo: MENU - names on items
todo: MENU - add more foods to json

todo: MENU - make product details pop up
todo: CART - add name and instructions fields

todo: HEADER - responsiveness: header
todo: HEADER - responsiveness: hamburger menu
todo: MENU - responsiveness: main menu
todo: CART - responsiveness: cart
todo: MENU - responsiveness: product detail page

todo: *home page
todo: *about us page
todo: CART - submit pickup/delivery order
todo: HEADER/FOOTER - social media links
todo: HEADER - restaurant name and logo

todo: *contact page: file upload and email - custom server?
todo: BLOG - news/blog from json
todo: CATERING - menu page
todo: CATERING - scheduling calendar


todo: BLOG - news, Cart from database
todo: CMS - admin login

todo: USER - user accounts: login, user page, user settings, theme, etc
todo: USER - user accounts: order history, billing info
todo: MAINTENANCE - check local storage for old/corrupt setup and clear or modify as needed

todo: CART - payment for cart

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
import Home from "./pages/Home";
import Menu from "./modules/Menu/pages/Menu";
import {ProductDetail} from "./modules/Menu/pages/ProductDetail";
import Cart from "./modules/Cart/pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";



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
                        <Route path='/' element={<Home />}/>
                        <Route path='menu' element={<Menu />}/>
                        <Route path='products/:title' element={<ProductDetail />}/>
                        <Route path='about' element={<About />}/>
                        <Route path='news' element={<Home />}/>
                        <Route path='contact' element={<Contact />}/>
                        <Route path='cart' element={<Cart />}/>
                    </Routes>
                </Layout>
            </div>
        </ctx.Provider>
    )
}

export default App