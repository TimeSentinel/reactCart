// src/pages/header.tsx

import {useNavigate} from "react-router-dom";
import cartIcon from "../../public/images/cart-100.png"
import {useContext} from "react";
import {ctx} from "../context";
import {StateInterface} from "../globalTypes.tsx";

function Header() {
    const state = useContext(ctx) as StateInterface
    const navigate = useNavigate();
    return (
        <div className="header">
            <div className="titleRow">
                <div className="logo"></div>
                <div className="cartCorner" onClick={() => navigate("/cart")}>
                    <span className="cartCount">{state.shoppingCart.length}</span>
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

        </div>
    )


}

export default Header;