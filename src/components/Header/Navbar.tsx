/* NAVBAR
################################### Restaurant Functional Module ###################################
/src/components/Header/Navbar.tsx    ::: main Navbar file
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {useContext, useRef, useState} from "react";
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
        openFiltersCats = false;
        stateFilterCats(openFiltersCats);
    }

    function navClick2(key: string) {
        setSearchParams({});
        setSearchQuery("");
        setSearchParams({q: key})
        console.log("key: " + key);   // %%%%%%%%%%%%%%%%%%%%%%%%%% DEBUG %%%%%%%%%%%%%%%%%%%%%%%%%%
        setSearchQuery(searchParams.get('q'));
        console.log("searchParams.get('q'): " + searchParams.get('q'));   // %%%%%%%%%%%%%%%%%%%%%%%%%% DEBUG %%%%%%%%%%%%%%%%%%%%%%%%%%
        navigate(`/menu?q=${encodeURIComponent(key)}`);
        console.log("searchQuery: " + searchQuery);   // %%%%%%%%%%%%%%%%%%%%%%%%%% DEBUG %%%%%%%%%%%%%%%%%%%%%%%%%%
        openFiltersCats = false;
        stateFilterCats(openFiltersCats);
    }

    // ------------------------------------------------------------------------------------

    // click category dropdown  code --------------------------------------------------
    const uniqueCats =
        ([...new Set(products.map(item => item.category))]).sort((a, b) => a.localeCompare(b));
    const uniqueTypes =
        ([...new Set(products.map(item => item.type))]).sort((a, b) => a.localeCompare(b));

    const dropDown = document.getElementById('dropDown') as HTMLDivElement || {};
    const categoryRef = useRef<HTMLDivElement>(null);
    let openFiltersCats = false;


    function stateFilterCats(state: boolean) {
        if (state) {
            dropDown.className = "dropDown enabled"
        } else {
            dropDown.className = "dropDown hidden"
        }
    }


    function toggleFilterCats() {
        openFiltersCats = !openFiltersCats;
        stateFilterCats(openFiltersCats);
    }

    // -------------------------------------------------------------------------------------

    return (
        <div className="navRow">
            <div className="navbarFiller"></div>
            <div className="navbar">
                <div className="navbarItem" id="home">
                    <button className={location.pathname === "/" ? "selected" : "enabled"} onClick={() => navigate("")}>
                        Home
                    </button>
                </div>
                <div className="navbarItem" id="menu" ref={categoryRef}>
                    <button className={location.pathname === "/menu" ? "selected" : "enabled"}
                            onClick={toggleFilterCats}>Menu
                    </button>
                    <div className="dropdown" id="dropDown">
                        <button className="enabled" onClick={() => {
                            navClick("menu")
                        }}>ALL
                        </button>
                        <div className="dropdownSpace">
                            <hr className="dropdownHr"/>
                        </div>
                        {uniqueCats.length > 0 ?
                            uniqueCats.map(item => {
                                return (
                                    <button className="navbarSubItem enabled"
                                            onClick={() => navClick2(item)} key={item}>{item}
                                    </button>
                                )
                            }) : null
                        }
                        <div className="dropdownSpace">
                            <hr className="dropdownHr"/>
                        </div>
                        {uniqueTypes.length > 0 ?
                            uniqueTypes.map(item => {
                                return (
                                    <button className="navbarSubItem disabled"
                                            onClick={() => navClick2("T:" + item)} key={item}>{item}
                                    </button>
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