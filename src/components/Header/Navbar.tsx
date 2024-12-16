/* NAVBAR
################################### Restaurant Functional Module ###################################
/src/components/Header/Navbar.tsx    ::: main Navbar file
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {useContext, useState} from "react";
import {ctx} from "src/context";
import "./navbar.css";

function Navbar() {
    const products = useContext(ctx).state.products;
    const location = useLocation();
    // ------------------ navigation --------------------------------------------------
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState<string | null>(searchParams.get('q') || null);
    const navigate = useNavigate();

    function navClick(page: string) {
        navigate("/" + page);
    }

    function navClick2(key: string) {
        setSearchParams({q: key})
       setSearchQuery(searchParams.get('q'));
        navigate(`/menu?q=${encodeURIComponent(key)}`);
        console.log(searchQuery);
    }

    // ------------------------------------------------------------------------------------

    // click product category and type lists  --------------------------------------------------
    const uniqueCats =
        ([...new Set(products.map(item => item.category))]).sort((a, b) => a.localeCompare(b));
    const uniqueTypes =
        ([...new Set(products.map(item => item.type))]).sort((a, b) => a.localeCompare(b));
    // ------------------------------------------------------------------------------------

    return (
        <div className="navRow">
            <div className="navbar">
                <div className="navbarItem" id="home">
                    <button className={location.pathname === "/" ? "selected" : "enabled"} onClick={() => navigate("")}>
                        Home
                    </button>
                </div>
                <div className="navbarItem" id="menu">
                    <button className={location.pathname === "/menu" ? "selected" : "enabled"}  onClick={() => {navClick("menu")}}
                    >Menu
                    </button>
                    <div className="dropDown" id="dropDown">
                        <div className="navbarSubItem enabled" onClick={() => {navClick("menu")}}>
                            ALL
                        </div>
                        <hr className="dropdownSpace"/>
                        {uniqueCats.length > 0 ?
                            uniqueCats.map(item => {
                                return (
                                    <div className="navbarSubItem enabled"
                                         onClick={() => navClick2(item)} key={item}>{item}
                                    </div>
                                )
                            }) : null
                        }
                        <hr className="dropdownSpace"/>

                        {uniqueTypes.length > 0 ?
                            uniqueTypes.map(item => {
                                return (
                                    <div className="navbarSubItem enabled"
                                         onClick={() => navClick2("T-" + item)} key={item}>{item}
                                    </div>
                                )
                            }) : null
                        }
                    </div>
                </div>
                <div className="navbarItem enabled" id="about">
                    <button className={location.pathname === "/about" ? "selected" : "enabled"}
                            onClick={() => navClick("about")}>
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
                <div className="navbarItem" id="contact">
                    <button onClick={() => navigate("/contact")}
                            className={location.pathname === "/contact" ? "selected" : "enabled"}>
                        Contact Us
                    </button>
                </div>
                <div className="navbarItem" id="cart">
                    <button onClick={() => navigate("/cart")}
                            className={location.pathname === "/cart" ? "selected" : "cartButton"}>
                        Cart
                    </button>
                </div>
            </div>
        </div>
    )

}

export default Navbar;