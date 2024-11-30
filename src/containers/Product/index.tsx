// src/cocntainers/Product/index.tsx
import "./Product.css"
import {ProductInterface} from "../../globalTypes.tsx";

const Product = ({title, category, description, price, image}: ProductInterface) => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={image} alt={title}/>
            </div>
            <h2 className="Product__title">
                {title}
            </h2>
            <div className="productContent">

                <p>{description}</p>
            </div>
            <div className="productLine">
                <div className="productPrice">${price}</div>
                <div className="productCategory">{category}</div>
            </div>
        </div>
    )
}

export {Product}