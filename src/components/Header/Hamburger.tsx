/* HAMBURGER
################################### Restaurant Functional Module ###################################
/src/components/Header/Hamburger.tsx    ::: small screen menu file
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
stylesheet: hamburger.css
(c)2024 Lance Stubblefield
####################################################################################################
*/


import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {ctx} from "src/context";
import "./hamburger.css";

function Hamburger() {
    const products = useContext(ctx).state.products;
    const navigate = useNavigate();
    // click product category and type lists  --------------------------------------------------
    const hamCats =
        ([...new Set(products.map(item => item.category))]).sort((a, b) => a.localeCompare(b));
    const hamTypes =
        ([...new Set(products.map(item => item.type))]).sort((a, b) => a.localeCompare(b));
    // ------------------------------------------------------------------------------------
    const [displayMain, setDisplayMain] = useState<boolean>(false);
    const [displaySub, setDisplaySub] = useState<boolean>(false);

    function toggleMain() {
        setDisplayMain(!displayMain);
    }

    function toggleSub() {
        setDisplaySub(!displaySub);
    }

    //main navigation
    function navClick(key: string) {
        navigate(key)
        setDisplayMain(false);
        setDisplaySub(false);
    }

    return (
        <div className="hamburger">
            <div id="hamburgerIcon" className="border-medium-color background-soft-color"
                 onClick={toggleMain}>
                <div className="iconBar background-dark-color"></div>
                <div className="iconBar background-dark-color"></div>
                <div className="iconBar background-dark-color"></div>
            </div>
            {displayMain && (
                <div id="hamburgerNavbar" className="background-soft-color">
                    <div className="hamburgerItem">
                        <button className={location.pathname === "/" ? "selected" : "enabled"}
                                onClick={() => {
                                    navClick("");
                                }}>
                            Home
                        </button>
                    </div>
                    <div className="hamburgerItem">
                        <button className={location.pathname === "/menu" ? "selected" : "enabled"} onClick={toggleSub}>
                            Menu
                        </button>
                        {displaySub && (
                            <div className="dropDown" id="dropDown">
                                <button className="navbarSubItem enabled background-light-color
                                 border-soft-color text-medium-color"
                                        onClick={() => {
                                            navClick("/menu")
                                        }}>
                                    <b>ALL</b>
                                </button>
                                <hr className="dropdownSpace"/>
                                {/* ##########################vv DROP DOWN SUB-MENU vv########################## */}
                                {hamCats.length > 0 ?
                                    hamCats.map(item => {
                                        return (
                                            <button className="navbarSubItem enabled"
                                                    onClick={() => navClick(`/menu?q=${encodeURIComponent(item)}`)}
                                                    key={item}>{item}
                                            </button>
                                        )
                                    }) : null
                                }
                                <hr className="dropdownSpace"/>
                                {hamTypes.length > 0 ?
                                    hamTypes.map(item => {
                                        return (
                                            <button className="navbarSubItem enabled"
                                                    onClick={() => navClick(`/menu?q=T-${encodeURIComponent(item)}`)}
                                                    key={item}>{item}
                                            </button>
                                        )
                                    }) : null
                                }
                                {/* ##########################^^ DROP DOWN SUB-MENU ^^########################## */}
                            </div>
                        )}
                    </div>
                    <div className="hamburgerItem" id="menuX">
                        <button className={location.pathname === "/about" ? "selected" : "enabled"}
                                onClick={() => navClick("/about")}>
                            Our Story
                        </button>
                    </div>
                    <div className="hamburgerItem">
                        <button className="disabled">
                            News
                        </button>
                    </div>
                    <div className="hamburgerItem">
                        <button className="disabled">
                            Other
                        </button>
                    </div>
                    <div className="hamburgerItem">
                        <button className="disabled">
                            Contact Us
                        </button>
                    </div>
                    <div className="hamburgerItem">
                        <button onClick={() => navClick("/cart")}
                                className={location.pathname === "/cart" ? "selected" : "cartButton"}>
                            Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    )

}

export default Hamburger;