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

interface Props {
    children: ReactNode;
}

const Layout = ({children}: Props) => {

    return (
        <main>
            <Header/>
            <section>
                {children}
            </section>
            <Footer/>
        </main>
    )
}
export {Layout}