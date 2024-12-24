/* NAVLIST
################################### Restaurant Functional Module ###################################
/src/components/Header/Navlist.tsx    ::: Navigation list to be imported by hamburger and navbar
REQ: Vite-React.js+TypeScript, react-router-dom,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import './navlist.css'
import NavButton from "./NavButton.tsx";

/*
    mainrow = the container for the elements. mainrow can be defined in hamburger and navbar style sheets
        level1 = buttons/links that appear in the main row. this level is always visible
            level2 = sub menus from level1. these appear only when level1 button is hovered or clicked on (focus)
                level3 = sub/slide menus from level2. open upon focus on level2.
    enabled/disabled enables functioning and changes css for buttons/links
 */

function Navlist() {
    function onClick() {

    }

    const style = {
        display: "flex",
    }

    return (

        <div className="mainrow">
            <div className="level1 enabled">
                <NavButton enabled={true} style={style} onClick={onClick}>Home</NavButton>
            </div>
            <div className="level1 enabled">Menu
                <div className="level2 enabled">{/*import Menu list*/}</div>
                <div className="level2 disabled">Catering</div>
            </div>
            <div className="level1 enabled">Us
                <div className="level2 enabled">Our Story</div>
                <div className="level2 enabled">Contact Us</div>
            </div>
            <div className="level1 enabled">Media
                <div className="level2 disabled">News</div>
                <div className="level2 disabled">Gallery</div>
            </div>
            <div className="level1 enabled">{/*import cart button*/}</div>
        </div>

    )
}

export default Navlist;
