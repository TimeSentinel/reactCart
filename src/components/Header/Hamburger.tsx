/* HAMBURGER
################################### Restaurant Functional Module ###################################
/src/components/Header/Hamburger.tsx    ::: small screen menu file
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
stylesheet: hamburger.css
(c)2024 Lance Stubblefield
####################################################################################################
*/


import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {ctx} from "src/context";
import "./hamburger.css";

function Hamburger() {
    const products = useContext(ctx).state.products;
    const navigate = useNavigate();
    const hamCats =
        ([...new Set(products.map(item => item.category))]).sort((a, b) => a.localeCompare(b));
    function navClick(key:string) {
        console.log(key);
    }
    function navClick2(key:string) {
        console.log(key);
    }

    return (
        <div className="hamburger">
            <div id="hamburgerIcon" className="hidden">
                <div className="iconBar"></div>
                <div className="iconBar"></div>
                <div className="iconBar"></div>
            </div>
            <div id="hamburgerNavbar"  className="hidden">
                <div className="hamburgerItem">
                    <button className={location.pathname === "/" ? "selected" : "enabled"} onClick={() => navigate("")}>
                        Home
                    </button>
                </div>
                <div className="hamburgerItem">
                    <button className={location.pathname === "/menu" ? "selected" : "enabled"}>
                        Menu
                    </button>
                    <div className="dropDown hidden" id="dropDown">
                        <button className="navbarSubItem enabled" onClick={() => {
                            navClick("menu")
                        }}>ALL
                        </button>
                        {hamCats.length > 0 ?
                            hamCats.map(item => {
                                return (
                                    <button className="navbarSubItem enabled"
                                            onClick={() => navClick2(item)} key={item}>{item}
                                    </button>
                                )
                            }) : null
                        }
                    </div>
                </div>
                <div className="hamburgerItem" id="menuX">
                    <button className={location.pathname === "/about" ? "selected" : "enabled"}
                            onClick={() => navClick("about")}>
                        Our Story
                    </button>
                </div>
                <div className="hamburgerItem">
                    <button className="disabled">
                        News
                    </button>
                </div>
                {/*<div className="navbarItem">*/}
                {/*    <button className="disabled">*/}
                {/*        Other*/}
                {/*    </button>*/}
                {/*</div>*/}
                <div className="hamburgerItem">
                    <button className="disabled">
                        Contact Us
                    </button>
                </div>
                <div className="hamburgerItem">
                    <button onClick={() => navigate("/cart")}
                            className={location.pathname === "/cart" ? "selected" : "cartButton"}>
                        Cart
                    </button>
                </div>
            </div>
        </div>
    )

}

export default Hamburger;