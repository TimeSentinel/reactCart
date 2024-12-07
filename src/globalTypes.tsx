/* GLOBAL TYPES
################################### Restaurant Functional Module ###################################
/src/globalTypes.tsx    ::: primary type setting
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

export interface ProductInterface {
    id: number;
    category: string;
    title: string;
    description: string;
    price: number;
    image: string;
}

export interface CartInterface {
    [id: number]: number;
}


export interface ActionInterface {
    type: string;
    payload: unknown;
}

export interface ProductProps {
    id: number;
    title: string;
    image: string;
    price: number;
    category: string;
}