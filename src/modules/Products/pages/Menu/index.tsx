/* Menu Page
################################### Restaurant Functional Module ###################################
Module: Menu
/modules/Menu/pages/menu/pages/index.tsx    ::: product detail
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

    return (
        <>
            <div className="menuHeader text-dark-color">
                <h1 className="text-very-dark-color">Our Menu</h1>
                <p>
                    Unique and custom tastes require unique and custom words...
                </p>
                <p>
                    Choose from our wide diversity of dishes. Something for everyone in the family to enjoy!
                </p>
            </div>
            <div className="menuContainer">
                {
                    state.products.length ? (
                        <div className="catalog-container">
                            {state.products.map(product => (
                                location.search === "" ||
                                (location.pathname === "/menu" && (location.search === "?q=" + product.category ||
                                    location.search === "?q=T-" + product.type))
                                    ?
                                        <div key={product.id}>
                                            <Product
                                                id={product.id}
                                                title={product.title}
                                                category={product.category}
                                                type={product.type}
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
