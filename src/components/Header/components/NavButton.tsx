/* NAVLIST
################################### Restaurant Functional Module ###################################
/src/components/Header/Navlist.tsx    ::: Navigation list to be imported by hamburger and navbar
REQ: Vite-React.js+TypeScript, react-router-dom,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import {PropsWithChildren, CSSProperties} from "react";

interface BasicPageProps extends PropsWithChildren {
    enabled: boolean;
    style?: CSSProperties;
    onclick?: () => void;
}

function NavButton( {enabled, onclick, style, children}: BasicPageProps){
    const divClass = "navbutton" + (enabled ? "enabled" : "disabled")

    return (
            <button className={divClass} style={style} onClick={() => onclick}>
                {children}
            </button>
    );
};

export default NavButton;