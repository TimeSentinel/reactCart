// src/app.tsx
import './App.css';
import {useEffect, useReducer} from "react";
import {ctx} from "./context";
import {initialState, reducerFn} from "./reducer";
import {Home} from "./pages/Home";
import { Route, Routes} from 'react-router-dom';
import {ProductDetail} from "./pages/ProductDetail";
import {Layout} from "./layout";
import Cart from "./pages/Cart";

function App() {
    const [state, dispatch] = useReducer(reducerFn, initialState);

    console.log("State", state);

    useEffect(() => {
        fetch("src/products/products.json")
            .then(res => res.json())
            .then(data => dispatch({type: "ADD_PRODUCTS", payload: data}));
    }, [])
    return (
        <ctx.Provider value={state}>
            <div className="App">

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