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
    const activeCart = state?.shoppingCart || []
    const navigate = useNavigate();

    const dropDown = document.getElementById('dropDown') as HTMLInputElement

    function handleClick1() {
        navigate("/")
        dropDown.className = "dropDown hidden"
    }
    function handleClick2() {
        navigate("/")
        dropDown.className = "dropDown hidden"
    }
    function handleClick3() {
        navigate("/")
        dropDown.className = "dropDown hidden"
    }

    function openMenu() {
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
            <div className="menuRow">
                <div className="menuFiller"></div>
                <div className="menu">
                    <div className="menuItem">
                        <button className="enabled" onClick={() => navigate("/")}>
                            Home
                        </button>
                    </div>

                    <div className="menuItem">
                        <button className="popDown enabled" onClick={openMenu}>Menu</button>
                        <div className="dropDown hidden" id="dropDown">
                            <button className="menuSubItem enabled" onClick={handleClick1}>ALL</button>
                            <button className="menuSubItem disabled" onClick={handleClick2}>American</button>
                            <button className="menuSubItem disabled" onClick={handleClick3}>Mexican</button>
                            <button className="menuSubItem disabled" onClick={handleClick3}>Asian</button>
                            <button className="menuSubItem disabled" onClick={handleClick3}>Fusion</button>
                            <button className="menuSubItem disabled" onClick={handleClick3}>Breakfast</button>
                            <button className="menuSubItem disabled" onClick={handleClick3}>Beverage</button>
                        </div>
                    </div>

                    <div className="menuItem enabled" id="menuX">
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
                    {/*<div className="menuItem">*/}
                    {/*    <button className="disabled">*/}
                    {/*        Takeout*/}
                    {/*    </button>*/}
                    {/*</div>*/}
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