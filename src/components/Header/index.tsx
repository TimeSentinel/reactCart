/* HEADER
################################### Restaurant Functional Module ###################################
/src/components/Header/index.tsx    ::: root header file
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
Required header.css, Navbar.tsx
(c)2024 Lance Stubblefield
####################################################################################################
*/

import {useNavigate} from "react-router-dom";
import cartIcon from "/images/cart-100.png";
import {useContext} from "react";
import {ctx} from "src/context";
import "./header.css";
import Navbar from "./Navbar.tsx";

function Header() {
    const localState = useContext(ctx).localState.shoppingCart
    const navigate = useNavigate();

    return (
        <header>
            <div className="header">
                <div className="titleRow">
                    <div className="headerLeft">
                        <div className="logo">
                            Logo goes here
                        </div>
                    </div>
                    <div className="headerCenter">

                    </div>
                    <div className="headerRight">
                        <div className="cartCorner" onClick={() => navigate("/cart")}>
                            <span className="cartCount">{Object.keys(localState).length}</span>
                            <img src={cartIcon} alt="cart"/>
                        </div>
                    </div>
                </div>
                <Navbar/>
            </div>
        </header>
    )
}

export default Header;