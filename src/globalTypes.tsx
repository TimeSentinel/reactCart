// src/globalTypes.tsx

export interface ProductInterface {
    id: number;
    category: string;
    title: string;
    description: string;
    price: number;
    image: string;
}

export interface CartInterface {
    id: number;
    category: string;
    title: string;
    price: number;
    quantity: number;
}

export interface StateInterface {
    products: ProductInterface[];
    shoppingCart: CartInterface[];
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