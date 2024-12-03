/* Product Detail
################################### Restaurant Functional Module ###################################
/src/pages/ProduleDetail/index.tsx    ::: product detail
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import {useParams} from "react-router-dom"
import {useContext} from "react";
import { ProductInterface} from "../../../globalTypes.tsx";
import {ctx} from "../../../App.tsx";
import toast from "react-hot-toast";

const ProductDetail: React.FC = () => {
    const state = useContext(ctx)?.state
    const dispatch = useContext(ctx)?.dispatch
    const activeCart = state?.shoppingCart || []
    const activeProducts = state?.products || []
    const {title} = useParams()
    const product: ProductInterface = activeProducts.find(
        product => product.title.trim() === title?.trim()
    ) as ProductInterface

    const addClick = (row: number) => {
        if (!(row in activeCart)) {
            dispatch({
                type: "ADD_TO_CART",
                payload: {id: row, quantity: 1}
            })
            toast.success("Added to Cart");
        } else {
            const curCount = activeCart[row] || 0
            dispatch({
                type: "UPDATE_CART",
                payload: {id: row, quantity: (curCount + 1)}
            })
            toast.success("Cart Updated");
        }
    }

    return (
        <div className="productPage">
            <img src={product.image} alt={product.title}/>
            <h2>{title}</h2>
            <p> {product.description}
            </p>
            {product.price}
            {product.category}
            <button onClick={() => addClick(product.id)}>ADD TO CART</button>
        </div>
    )
}

export {ProductDetail};