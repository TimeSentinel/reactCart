// src/pages/Menu/index.tsx

import {Product} from "../../containers/Product";
import {useContext} from "react";
import {ctx} from "../../../App.tsx";



const Home: React.FC = () => {
    const state = useContext(ctx).state

    return (
        <>
            {
                state.products.length ? (
                    <div className="catalog-container">
                        {state.products.map(product => (
                            <div key={product.id}>
                                <Product
                                    id={product.id}
                                    title={product.title}
                                    category={product.category}
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
        </>
    )
}

export {Home};
