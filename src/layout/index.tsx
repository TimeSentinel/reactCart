/* LAYOUT
################################### Restaurant Functional Module ###################################
/src/containers/Cart/index.tsx    ::: primary application container
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import {ReactNode} from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";

interface Props {
    children: ReactNode;
}

const Layout = ({children}: Props) => {

    return (
        <main>
            <Header/>
            <section className="">
                {children}
            </section>
            <Footer/>
        </main>
    )
}
export {Layout}