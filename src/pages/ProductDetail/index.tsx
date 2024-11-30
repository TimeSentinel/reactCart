// src/pages/ProduleDetail/index.tsx
import {useParams} from "react-router-dom"
import {ctx} from "../../context";
import { useContext} from "react";
import {ActionInterface, ProductInterface} from "../../globalTypes.tsx";

interface ProductDetailProps {
    dispatch: React.Dispatch<ActionInterface>
}

const ProductDetail: React.FC<ProductDetailProps> = ({ dispatch }) => {
    const state = useContext(ctx)
    const {title} = useParams()
    const product: ProductInterface = state?.products.find(
        product => product.title.trim() === title?.trim()
    ) as ProductInterface

    const handleClick = () => {
        dispatch({ type: "ADD_TO_CART", payload: product})
    }

    return (
        <div className="productPage">
            <img src={product.image} alt={product.title}/>
            <h2>{title}</h2>
            <p> {product.description}
            </p>
            {product.price}
            {product.category}
            <button onClick={handleClick} >ADD TO CART</button>
        </div>
        // todo: details and description of product on this page
    )
}

export {ProductDetail};