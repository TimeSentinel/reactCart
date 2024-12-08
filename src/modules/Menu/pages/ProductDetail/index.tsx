/* Product Detail Page
################################### Restaurant Functional Module ###################################
Module: Cart
/modules/Cart/pages/ProductDetail/stateReducers.tsx    ::: product detail
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import "src/modules/Menu/pages/menuPages.css"
import {useParams} from "react-router-dom"
import {useContext} from "react";
import {ProductInterface} from 'src/reducer/stateReducers.tsx';
import {useNavigate} from "react-router-dom";
import {ctx} from "src/context";
import toast from "react-hot-toast";

const ProductDetail: React.FC = () => {
    const state = useContext(ctx)?.state
    const localDispatch = useContext(ctx).localDispatch
    const navigate = useNavigate();
    const localState = useContext(ctx).localState.shoppingCart
    const activeProducts = state?.products || []
    const {title} = useParams()

    const product: ProductInterface = activeProducts.find(
        product => product.title.trim() === title?.trim()
    ) as ProductInterface

    const addClick = (row: string) => {
        if (!(row in localState)) {
            localDispatch({
                type: "ADD_TO_CART",
                payload: {id: row, quantity: 1}
            })
            toast.success("Added to Cart");
        } else {
            const curCount = localState[row] || 0
            localDispatch({
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

                {product.id in localState && <div className="productInCart">
                    <button onClick={() =>
                        navigate("/cart")}>
                        {localState[product.id]} in cart!
                    </button>
                </div>
                }

            </div>
        </div>
    )
}

export {ProductDetail};