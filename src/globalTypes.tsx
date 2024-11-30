// src/globalTypes.tsx

export interface ProductInterface {
    id: number;
    category: string;
    title: string;
    description: string;
    price: number;
    image: string;
}

export interface StateInterface {
    products: ProductInterface[];
    shoppingCart: ProductInterface[];
}

export interface ActionInterface {
    type: string;
    payload: unknown;
}

export interface ProductProps {
    title: string;
    image: string;
    price: number;
    category: string;
}