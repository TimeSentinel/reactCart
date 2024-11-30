// src/app.tsx
import './App.css';
import {useEffect, useReducer} from "react";
import {Product} from "./containers/Product";
import {ctx} from "./context";
import {initialState, reducerFn} from "./reducer";
import Header from "./pages/header.tsx";

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
            <div className="head-container">
                <Header />
            </div>
            <div className="App">
                {
                    state.products.length ? (
                        <div className="catalog-container" >
                            {state.products.map(product => (
                                <div key={product.id}>
                                    <Product
                                        id={product.id}
                                        title={product.title}
                                        category={product.category}
                                        description={product.description}
                                        price={product.price}
                                        image={product.image}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <h2>Loading...</h2>
                    )
                }
            </div>
        </ctx.Provider>
    )
}

export default App