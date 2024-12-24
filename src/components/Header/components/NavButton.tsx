/* NAVLIST
################################### Restaurant Functional Module ###################################
/src/components/Header/Navlist.tsx    ::: Navigation list to be imported by hamburger and navbar
REQ: Vite-React.js+TypeScript, react-router-dom,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import {PropsWithChildren, CSSProperties} from "react";

/* ----------------------------------------------------------------------------------------------------
    mainrow = the container for the elements. mainrow can be defined in hamburger and navbar style sheets
        level1 = buttons/links that appear in the main row. this level is always visible
            level2 = sub menus from level1. these appear only when level1 button is hovered or clicked on (focus)
                level3 = sub/slide menus from level2. open upon focus on level2.
    enabled/disabled enables functioning and changes css for buttons/links
 */
interface BasicPageProps extends PropsWithChildren {
    enabled: boolean;
    style?: CSSProperties;
    onClick?: () => void;

}

function NavButton( {enabled, onClick, style, children}: BasicPageProps){       // ToDo: ADD OnClick passThrough
    const divClass = "navbutton" + (enabled ? "enabled" : "disabled")

    return (
            <button className={divClass} style={style} onClick={onClick}>
                {children}
            </button>
    );
};

export default NavButton;