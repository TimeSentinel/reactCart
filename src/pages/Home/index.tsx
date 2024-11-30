// src/pages/Home/index.tsx

import {Product} from "../../containers/Product";
import {useContext} from "react";
import {StateInterface,} from "../../globalTypes.tsx";
import {ctx} from "../../context";


const Home: React.FC = () => {
    const state = useContext(ctx) as StateInterface

    return (
        <>
            {
                state.products.length ? (
                    <div className="catalog-container">
                        {state.products.map(product => (
                            <div key={product.id}>
                                <Product
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
