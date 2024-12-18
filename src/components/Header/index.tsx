/* HEADER
################################### Restaurant Functional Module ###################################
/src/components/Header/index.tsx    ::: root header file
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
Required header.css, Navbar.tsx
(c)2024 Lance Stubblefield
####################################################################################################
*/

import "./header.css";
import cartIcon from "/images/cart-100.png";
import logo from "/images/logos/delectatorium-purple.png";

import {useContext} from "react";
import {useNavigate} from "react-router-dom";

import {ctx} from "src/context";
import Navbar from "./Navbar.tsx";
import Hamburger from "./Hamburger.tsx";

function Header() {
    const localState = useContext(ctx).localState.shoppingCart
    const navigate = useNavigate();

    return (
        <header className="border-bright-color background-light-color">
            <div className="header">
                <div className="titleRow">
                    <div className="headerLeft">
                        <div className="logo">
                            <img className="logoImg" src={logo} alt="logo" />

                        </div>
                    </div>
                    <div className="headerCenter">
                        <h1>Delectorium</h1>
                        <h5>Food so good, you can't stop!</h5>

                    </div>
                    <div className="headerRight">
                        <div className="cartCorner" onClick={() => navigate("/cart")}>
                            <span className="cartCount">{Object.keys(localState).length}</span>
                            <img src={cartIcon} alt="cart"/>
                        </div>
                    </div>
                </div>
                <Navbar/>
                <Hamburger />
            </div>
        </header>
    )
}

export default Header;