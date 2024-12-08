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
    category: string;
}

const Product = ({id, title, category, price, image}: ProductProps) => {
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
        <div className="product-card">
            <div className="thumbnail" onClick={handleClick}>
                <img src={image} alt={title}/>
            </div>
            <h2 className="Product_title" onClick={handleClick}>
                {title}
            </h2>

            <div className="productLine">
                <div className="productPrice">${price}</div>
                <div className="productCategory">{category}</div>
            </div>
            <div className="productLine">
                <div className="cartAdded" id={id.toString()}>
                    { id in activeCart && <> <button onClick={() => navigate("/cart")}>{activeCart[id]} in cart! </button></>
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