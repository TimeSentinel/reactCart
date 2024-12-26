/* APP.TSX
################################### Restaurant Functional Module ###################################
/src/App.tsx    ::: primary application container
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
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
import Menu from "./modules/Products/pages/Menu";
import {ProductDetail} from "./modules/Products/pages/ProductDetail";
import Cart from "./modules/Cart/pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";

//todo: separation of modules

function App() {
    const [state, dispatch] = useReducer(reducerFn, initialState);
    const [localState, localDispatch] = useLocalStorage("LocalStorage")

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
                <Toaster reverseOrder={true} />
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