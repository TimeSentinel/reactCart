/* NAVLIST
################################### Restaurant Functional Module ###################################
/src/components/Header/Navlist.tsx    ::: Navigation list to be imported by hamburger and navbar
REQ: Vite-React.js+TypeScript, react-router-dom,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import './navlist.css'
import NavButton from "./NavButton.tsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useState} from "react";

/*
    mainrow = the container for the elements. mainrow can be defined in hamburger and navbar style sheets
        level1 = buttons/links that appear in the main row. this level is always visible
            level2 = sub menus from level1. these appear only when level1 button is hovered or clicked on (focus)
                level3 = sub/slide menus from level2. open upon focus on level2.
    enabled/disabled enables functioning and changes css for buttons/links
 */

function Navlist() {
    // ------------------ navigation --------------------------------------------------
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState<string | null>(searchParams.get('q') || null);
    const navigate = useNavigate();

    function navDirectClick(page: string) {
        navigate("/" + page);
    }

    function navSearchClick(key: string) {
        setSearchParams({q: key})
        setSearchQuery(searchParams.get('q'));
        navigate(`/menu?q=${encodeURIComponent(key)}`);
        console.log(searchQuery);
    }

    // ------------------------------------------------------------------------------------


//region   ------------------------ Level Styles ------------------------
    const styleL1 = { // CSS Style for level 1
        display: "flex",
    }

    const styleL2 = {// CSS Style for level 2
        display: "flex",
    }

    // const styleL3 = {// CSS Style for level 3
    //     display: "flex",
    // }

//endregion
    // ----------------------------------------------------------------

    return (

        <div className="mainrow">
            <div className="level1 ">
                <NavButton enabled={true} style={styleL1} onclick={() => navDirectClick("")}>Home</NavButton>
            </div>
            <div className="level1 ">
                <NavButton enabled={true} style={styleL1} onclick={}>Menu</NavButton>
                <div className="level2 ">{/*import Menu list*/}</div>
                <div className="level2 ">
                    <NavButton enabled={false} style={styleL2} onclick={}>Catering</NavButton>
                </div>
            </div>
            <div className="level1 ">
                <NavButton enabled={true} style={styleL1} onclick={}>Us</NavButton>
                <div className="level2 ">
                    <NavButton enabled={true} style={styleL2} onclick={}>Our Story</NavButton>
                </div>
                <div className="level2 ">
                    <NavButton enabled={true} style={styleL2} onclick={}>Contact Us</NavButton>
                </div>
            </div>
            <div className="level1 ">
                <NavButton enabled={true} style={styleL1} onclick={}>Media</NavButton>
                <div className="level2 ">
                    <NavButton enabled={false} style={styleL2} onclick={}>News</NavButton>
                </div>
                <div className="level2 ">
                    <NavButton enabled={false} style={styleL2} onclick={}>Gallery</NavButton>
                </div>
            </div>
            <div className="level1 ">{/*import cart button*/}</div>
        </div>

    )
}

export default Navlist;
