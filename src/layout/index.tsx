/* LAYOUT
################################### Restaurant Functional Module ###################################
/src/containers/Cart/stateReducers.tsx    ::: primary application container
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import {ReactNode} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Themes from "../modules/Themes";

interface Props {
    children: ReactNode;
}

const Layout = ({children}: Props) => {

    return (
        <main>
            <Themes/>
            <Header/>
            <section className="">
                {children}
            </section>
            <Footer/>
        </main>
    )
}
export {Layout}