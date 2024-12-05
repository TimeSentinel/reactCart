/* Product Detail Page
################################### Restaurant Functional Module ###################################
Module: Cart
/modules/Cart/pages/ProductDetail/index.tsx    ::: product detail
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import "src/modules/Cart/pages/cartPages.css"
import {useParams} from "react-router-dom"
import {useContext} from "react";
import {ProductInterface} from "src/globalTypes.tsx";
import {useNavigate} from "react-router-dom";
import {ctx} from "src/context";
import toast from "react-hot-toast";

const ProductDetail: React.FC = () => {
    const state = useContext(ctx)?.state
    const dispatch = useContext(ctx)?.dispatch
    const navigate = useNavigate();
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
            <div className="productPic">
                <img src={product.image} alt={product.title}/>
                <div className="productTitle">
                    <h1>{title}</h1>
                </div>
            </div>
            <div className="productSection">
                <p> {product.description}
                </p>
                <div className="productCatRow">
                    <div className="productPrice">
                        {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD'
                        }).format(product.price) ?? 0}
                    </div>
                    <div className="productCat">
                        {product.category}
                    </div>
                </div>
                <div className="productButton">
                    <button onClick={() => addClick(product.id)}>ADD TO CART</button>
                </div>

                {product.id in activeCart && <div className="productInCart">
                    <button onClick={() =>
                        navigate("/cart")}>
                        {activeCart[product.id]} in cart!
                    </button>
                </div>
                }

            </div>
        </div>
    )
}

export {ProductDetail};