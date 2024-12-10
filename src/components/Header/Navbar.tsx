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

    // ------------------ navigation --------------------------------------------------
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState<string|null>(searchParams.get('q') || null);

    function navClick(page: string) {
        navigate("/" + page);
        openFiltersCats = false;
        stateFilterCats(openFiltersCats);
    }

    function navClick2(key: string) {
        setSearchParams ({});
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

    // click category dropdown nav code --------------------------------------------------
    const uniqueCats =
        ([...new Set(products.map(item => item.category))]).sort((a, b) => a.localeCompare(b));
    const navigate = useNavigate();
    const dropDown = document.getElementById('dropDown') as HTMLDivElement || {};
    const categoryRef = useRef<HTMLDivElement>(null);
    let openFiltersCats = false;
    const location = useLocation();

    function stateFilterCats(state: boolean) {
        if (state) {
            dropDown.className = "dropDown enabled"
            window.addEventListener("click", handleClickOutside);
        } else {
            window.removeEventListener("click", handleClickOutside);
            dropDown.className = "dropDown hidden"
        }
    }

    function handleClickOutside(e: MouseEvent) {
        if (openFiltersCats && !categoryRef.current?.contains(e.target as Node)) {
            openFiltersCats = false;
            stateFilterCats(openFiltersCats);
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
                <div className="navbarItem">
                    <button className={ location.pathname === "/" ? "selected" : "enabled" } onClick={() => navigate("")}>
                        Home
                    </button>
                </div>
                <div className="navbarItem" ref={categoryRef}>
                    <button className={ location.pathname === "/menu" ? "selected" : "enabled" }  onClick={toggleFilterCats}>Menu</button>
                    <div className="dropdown hidden" id="dropDown" >
                        <button className="navbarSubItem enabled" onClick={() => {
                            navClick("menu")
                        }}>ALL</button>
                        { uniqueCats.length > 0 ?
                            uniqueCats.map(item => {
                                return (
                                    <button className="navbarSubItem enabled"
                                            onClick={() => navClick2(item)} key={item}>{item}
                                    </button>
                                )
                            }) : null
                        }
                    </div>
                </div>
                <div className="navbarItem enabled" id="menuX">
                    <button className={ location.pathname === "/about" ? "selected" : "enabled" } onClick={() => navClick("about")}>
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
                    <button onClick={() => navigate("/cart")}
                            className={ location.pathname === "/cart" ? "selected" : "cartButton" } >
                        Cart
                    </button>
                </div>
            </div>
        </div>
    )

}

export default Navbar;