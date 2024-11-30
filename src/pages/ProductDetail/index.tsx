// src/pages/ProduleDetail/index.tsx
import {useParams} from "react-router-dom"
import {ctx} from "../../context";
import {useContext} from "react";
import {ProductInterface} from "../../globalTypes.tsx";

const ProductDetail: React.FC = () => {
    const state = useContext(ctx)
    const {title} = useParams()
    const product: ProductInterface = state?.products.find(
        product => product.title.trim() === title?.trim()
    ) as ProductInterface

    const handleClick = () => {
        console.log("pookey bologna")
    }

    return (
        <div className="productPage">
            <img src={product.image} alt={product.title}/>
            <h2>{title}</h2>
            <p> {product.description}
            </p>
            {product.price}
            {product.category}
            <button onClick={handleClick}>ADD TO CART</button>
        </div>
        // todo: details and description of product on this page
    )
}

export {ProductDetail};