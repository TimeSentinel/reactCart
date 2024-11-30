// src/layour/index.tsx

import {ReactNode} from "react";
import Header from "../pages/header.tsx";

interface Props {
    children: ReactNode;
}

const Layout = ({ children }:Props) => {

    return (
        <main>
            <header>
                <Header/>
            </header>
            <section className="">
                {children}
            </section>
        </main>
    )
}
export {Layout}