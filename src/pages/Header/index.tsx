/* HEADER
################################### Restaurant Functional Module ###################################
/src/pages/Header/index.tsx    ::: primary application container
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/


import {useNavigate} from "react-router-dom";
import cartIcon from "/images/cart-100.png"
import {useContext} from "react";
import {ctx} from "src/context"

function Header() {
    const state = useContext(ctx).state
    const activeCart  = state?.shoppingCart || []
    const navigate = useNavigate();
    return (
        <header>
            <div className="titleRow">
                <div className="logo"></div>
                <div className="cartCorner" onClick={() => navigate("/cart")}>
                    <span className="cartCount">{Object.keys(activeCart).length}</span>
                    <img src={cartIcon} alt="cart" />
                </div>

            </div>
            <div className="menuRow">
                <div className="menuFiller"></div>
                <div className="menu">
                    <div className="menuItem">
                        <button className="disabled">
                            Home
                        </button>
                    </div>
                    <div className="menuItem">
                        <button onClick={() => navigate("/")} className="enabled">
                            Menu
                        </button>
                    </div>
                    <div className="menuItem">
                        <button className="disabled">
                            Our Story
                        </button>
                    </div>
                    <div className="menuItem">
                        <button className="disabled">
                            News
                        </button>
                    </div>
                    <div className="menuItem">
                        <button className="disabled">
                            News
                        </button>
                    </div>
                    <div className="menuItem">
                        <button className="disabled">
                            Takeout
                        </button>
                    </div>
                    <div className="menuItem">
                        <button onClick={() => navigate("/cart")} className="cartButton">
                            Cart
                        </button>
                    </div>
                </div>
            </div>

        </header>
    )


}

export default Header;