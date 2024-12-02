/* Product Container
################################### Restaurant Functional Module ###################################
/src/containers/Product/index.tsx    :::  product container
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import "./Product.css"
import {ProductProps} from "../../globalTypes.tsx";
import {useNavigate} from "react-router-dom";

const Product = ({title, category, price, image}: ProductProps) => {
    const navigate = useNavigate();
    const handleClick = () => navigate(`/products/${title.trim()}`)
    const handleClick2 = () => console.log("Add " + title + " to cart")

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
            <div className="cartButton">
                <button className="button" onClick={handleClick2}>ADD TO CART</button>
            </div>
        </div>
    )
}

export {Product}