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
                    <button className={location.pathname === "/"
                        ? "selected text-bright-color background-dark-color border-very-dark-color"
                        : "enabled text-very-dark-color background-soft-color border-dark-color"}
                            onClick={() => navigate("")}>
                        Home
                    </button>
                </div>
                <div className="navbarItem" id="menu">
                    <button className={location.pathname === "/menu"
                        ? "selected text-bright-color background-dark-color border-very-dark-color"
                        : "enabled text-very-dark-color background-soft-color border-dark-color"}
                            onClick={() => {
                                navClick("menu")
                            }}
                    >Menu
                    </button>
                    <div className="dropDown text-dark-color background-light-color border-medium-shade" id="dropDown">
                        <div className="navbarSubItem enabled text-dark-color" onClick={() => {
                            navClick("menu")
                        }}>
                            ALL
                        </div>
                        <hr className="dropdownSpace"/>
                        {uniqueCats.length > 0 ?
                            uniqueCats.map(item => {
                                return (
                                    <div
                                        className="navbarSubItem enabled text-dark-color border-medium-shade background-light-shade"
                                        id="dropDown"
                                        onClick={() => navClick2(item)} key={item}>{item}
                                    </div>
                                )
                            }) : null
                        }
                        <hr className="dropdownSpace background-dark-color"/>

                        {uniqueTypes.length > 0 ?
                            uniqueTypes.map(item => {
                                return (
                                    <div
                                        className="navbarSubItem enabled text-very-dark-color border-medium-shade background-light-shade"
                                        onClick={() => navClick2("T-" + item)} key={item}>{item}
                                    </div>
                                )
                            }) : null
                        }
                    </div>
                </div>
                <div className="navbarItem enabled" id="about">
                    <button className={location.pathname === "/about"
                        ? "selected text-bright-color background-dark-color border-very-dark-color"
                        : "enabled text-very-dark-color background-soft-color border-dark-color"}
                            onClick={() => navClick("about")}>
                        About
                    </button>
                </div>
                <div className="navbarItem enabled" id="gallery">
                    <button className={location.pathname === "/gallery"
                        ? "selected text-bright-color background-dark-color border-very-dark-color"
                        : "enabled text-very-dark-color background-soft-color border-dark-color"}
                            onClick={() => navClick("gallery")}>
                        Gallery
                    </button>
                </div>
                <div className="navbarItem enabled">
                    <button
                        className={location.pathname === "/news"
                            ? "selected text-bright-color background-dark-color border-very-dark-color"
                            : "enabled text-very-dark-color background-soft-color border-dark-color"}
                        onClick={() => navClick("news")}>
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
                            className={location.pathname === "/contact"
                                ? "selected text-bright-color background-dark-color border-very-dark-color"
                                : "enabled text-very-dark-color background-soft-color border-dark-color"}>
                        Contact Us
                    </button>
                </div>
                <div className="navbarItem" id="cart">
                    <button onClick={() => navigate("/cart")}
                            className={location.pathname === "/cart"
                                ? "selected text-bright-color background-dark-color border-very-dark-color"
                                : "enabled cartButton"}>
                        Cart
                    </button>
                </div>
            </div>
        </div>
    )

}

export default Navbar;