/* Menu Page
################################### Restaurant Functional Module ###################################
Module: Cart
/modules/Cart/pages/ProductDetail/stateReducers.tsx    ::: product detail
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/


import "src/modules/Cart/pages/cartPages.css"
import {Product} from "../../containers/Product";
import {useContext} from "react";
import {ctx} from "../../../../context";
import {useLocation} from "react-router-dom";


function Menu() {
    const state = useContext(ctx).state
    const location = useLocation();
    console.log(location);

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
                                location.search === "" ||
                                (location.pathname === "/menu"  && location.search === "?q=" + product.category)
                                    ?
                                    <div key={product.id}>
                                        <Product
                                            id={product.id}
                                            title={product.title}
                                            category={product.category}
                                            price={product.price}
                                            image={product.image}
                                        />
                                    </div>
                                    : null
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

export default Menu;
