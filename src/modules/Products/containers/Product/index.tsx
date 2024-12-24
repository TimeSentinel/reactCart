/* Product Container
################################### Restaurant Functional Module ###################################
Module: Cart
/modules/Cart/containers/Product/index.tsx    :::  product container
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import "./Product.css";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {ctx} from "src/context";
import toast from "react-hot-toast";

export interface ProductProps {
    id: string;
    title: string;
    image: string;
    price: number;
    type: string;
    category: string;
}

const Product = ({id, title, image, price, type, category}: ProductProps) => {
    const activeCart = useContext(ctx).localState.shoppingCart
    const localDispatch = useContext(ctx).localDispatch
    const navigate = useNavigate();

    const handleClick = () => navigate(`/products/${title.trim()}`)

    const addClick = (row: string) => {
        if (!(row in activeCart)) {
            localDispatch({
                type: "ADD_TO_CART",
                payload: {id: row, quantity: 1}
            })
            toast.success("Added to Cart");
        } else {
            const curCount = activeCart[row] || 0
            localDispatch({
                type: "UPDATE_CART",
                payload: {id: row, quantity: (curCount + 1)}
            })
            toast.success("Cart Updated");
        }
    }

    return (
        <div className="product-card background-light-shade border-medium-color">
            <div className="thumbnail" onClick={handleClick}>
                <img src={image} alt={title} className="border-dark-color"/>
            </div>
            <div className="productTitle">
                <h2 className="Product_title text-very-dark-color" onClick={handleClick}>
                    {title}
                </h2>
            </div>
            <div className="productLine">
                <div className="productPrice text-very-dark-color">${price}</div>
                <div className="productType text-dark-color" onClick={() => navigate(`/menu?q=${encodeURIComponent('T-' + type)}`)}>
                    {type}</div>
                <div className="productCategory text-medium-color" onClick={() => navigate(`/menu?q=${encodeURIComponent(category)}`)}>
                    {category}</div>
            </div>
            <div className="productLine">
                <div className="cartAdded" id={id.toString()}>
                    {id in activeCart && <>
                        <button onClick={() => navigate("/cart")}>{activeCart[id]} in cart!</button>
                    </>
                    }
                </div>
                <div className="cartButton">
                    <button className="button" onClick={() => addClick(id)}>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export {Product}