/* FOOTER
################################### Restaurant Functional Module ###################################
/src/pages/Footer/stateReducers.tsx    ::: primary application container
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import "./footer.css"

function Footer() {
    return (
        <footer className="border-very-dark-shade background-dark-shade">
            <div className="footRow">
                <div className="footLeft">

                </div>
                <div className="footCenter text-light-color">
                    &copy; 2024 Lance Stubblefield<br/>
                    <a href="mailto: lance@sol3.one">
                        lance@sol3.one</a>
                </div>
                <div className="footRight">
                    <br/>

                    <a href="#" style={{color: "text-soft-color"}}>admin</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;