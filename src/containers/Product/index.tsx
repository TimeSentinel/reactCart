// src/cocntainers/Product/index.tsx
import "./Product.css"
import {ProductProps} from "../../globalTypes.tsx";
import {useNavigate} from "react-router-dom";

const Product = ({title, category, price, image}: ProductProps) => {
    const navigate = useNavigate();
    const handleClick = () => navigate(`products/${title.trim()}`)

    return (
        <div className="product-card" onClick={handleClick}>
            <div className="thumbnail">
                <img src={image} alt={title}/>
            </div>
            <h2 className="Product__title">
                {title}
            </h2>

            <div className="productLine">
                <div className="productPrice">${price}</div>
                <div className="productCategory">{category}</div>
            </div>
            <div className="cartButton">
                <button className="button" onClick={handleClick}>ADD TO CART</button>
            </div>
        </div>
    )
}

export {Product}