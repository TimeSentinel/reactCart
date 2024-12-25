/* HEADER
################################### Restaurant Functional Module ###################################
/src/components/Header/index.tsx    ::: root header file
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
Required header.css, Navbar.tsx
(c)2024 Lance Stubblefield
####################################################################################################
*/

import "./header.css";
import {useNavigate} from "react-router-dom";

import Navbar from "./navbar/Navbar.tsx";
import Hamburger from "./hamburger/Hamburger.tsx";
import CartCount from "../../modules/Cart/components/cartCount/CartCount.tsx";

function Header() {
    const navigate = useNavigate();

    return (
        <header>
            <div className="header background-light-color border-dark-color">
                <div className="titleRow">
                    <div className="headerLeft">
                        <div className="logo" onClick={() => navigate("/")}>
                        </div>
                    </div>
                    <div className="headerCenter">
                        <h1>Delectorium</h1>
                        <h5>Food so good, you won't stop!</h5>

                    </div>
                    <div className="headerRight">
                        <div className="cartCorner" onClick={() => navigate("/cart")}>
                            <CartCount />
                        </div>
                    </div>
                </div>
                <Navbar />
                <Hamburger />
            </div>
        </header>
    )
}

export default Header;