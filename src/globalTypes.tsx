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
}

export interface ActionInterface {
    type: string;
    payload: unknown;
}