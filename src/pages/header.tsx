// src/pages/header.tsx

import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return (
        <div className="header">
            <div className="titleRow"></div>
            <div className="menuRow">
                <div className="menuFiller"></div>
                <div className="menu">
                    <div className="menuItem">
                        <button onClick={() => navigate("/")}>
                            Home
                        </button>
                    </div>
                    <div className="menuItem"></div>
                    <div className="menuItem"></div>
                    <div className="menuItem"></div>
                    <div className="menuItem"></div>
                    <div className="menuItem">
                        <button onClick={() => navigate("/cart")}>
                            Cart
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )


}

export default Header;