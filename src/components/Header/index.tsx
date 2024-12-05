/* HEADER
################################### Restaurant Functional Module ###################################
/src/pages/Header/index.tsx    ::: primary application container
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import {useNavigate} from "react-router-dom";
import cartIcon from "/images/cart-100.png";
import {useContext} from "react";
import {ctx} from "src/context";
import "./header.css";

function Header() {
    const state = useContext(ctx).state
    const activeCart = state?.shoppingCart || []
    const navigate = useNavigate();

    const dropDown = document.getElementById('dropDown') as HTMLInputElement

    function navClick1() {
        navigate("/")
        dropDown.className = "dropDown hidden"
    }
    function navClick2() {
        navigate("/")
        dropDown.className = "dropDown hidden"
    }
    function navClick3() {
        navigate("/")
        dropDown.className = "dropDown hidden"
    }

    function openNavbar() {
        if (dropDown.className === "dropDown hidden") {
            dropDown.className = "dropDown enabled"
        } else {
            dropDown.className = "dropDown hidden"
        }
    }

    return (
        <header>
            <div className="titleRow">
                <div className="logo"></div>
                <div className="cartCorner" onClick={() => navigate("/cart")}>
                    <span className="cartCount">{Object.keys(activeCart).length}</span>
                    <img src={cartIcon} alt="cart"/>
                </div>

            </div>
            <div className="navRow">
                <div className="navbarFiller"></div>
                <div className="navbar">
                    <div className="navbarItem">
                        <button className="enabled" onClick={() => navigate("/")}>
                            Home
                        </button>
                    </div>

                    <div className="navbarItem">
                        <button className="enabled" onClick={openNavbar}>Menu</button>
                        <div className="dropDown hidden" id="dropDown">
                            <button className="navbarSubItem enabled" onClick={navClick1}>ALL</button>
                            <button className="navbarSubItem disabled" onClick={navClick2}>American</button>
                            <button className="navbarSubItem disabled" onClick={navClick3}>Mexican</button>
                            <button className="navbarSubItem disabled" onClick={navClick3}>Asian</button>
                            <button className="navbarSubItem disabled" onClick={navClick3}>Fusion</button>
                            <button className="navbarSubItem disabled" onClick={navClick3}>Breakfast</button>
                            <button className="navbarSubItem disabled" onClick={navClick3}>Beverage</button>
                        </div>
                    </div>

                    <div className="navbarItem enabled" id="menuX">
                    <button className="disabled">
                            Our Story
                        </button>
                    </div>
                    <div className="navbarItem">
                        <button className="disabled">
                            News
                        </button>
                    </div>
                    {/*<div className="navbarItem">*/}
                    {/*    <button className="disabled">*/}
                    {/*        Other*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                    <div className="navbarItem">
                        <button className="disabled">
                            Contact Us
                        </button>
                    </div>
                    <div className="navbarItem">
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