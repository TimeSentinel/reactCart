/* Menu Page
################################### Restaurant Functional Module ###################################
Module: Cart
/modules/Cart/pages/ProductDetail/index.tsx    ::: product detail
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/


import "src/modules/Cart/pages/cartPages.css"
import {Product} from "../../containers/Product";
import {useContext} from "react";
import {ctx} from "../../../../context";


const Home: React.FC = () => {
    const state = useContext(ctx).state

    return (
        <>
            <div className="menuHeader">
                <h1>Our Menu</h1>
                <p>Unique and custom tastes require unique and custom words...
                </p>
            </div>
            <div className="menuContainer">
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
            </div>
        </>
    )
}

export {Home};
