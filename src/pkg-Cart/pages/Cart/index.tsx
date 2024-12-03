/* CART PAGE
################################### Restaurant Functional Module ###################################
/src/pages/Cart/index.tsx    ::: Cart Page
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import {useContext, useEffect, useState} from "react";
import {CartItem} from "src/pkg-Cart/containers/Cart";
import {ctx} from "src/context";
import toast from "react-hot-toast";
import {ProductInterface} from "../../../globalTypes.tsx";

const Cart: React.FC = () => {
    const state = useContext(ctx).state
    const dispatch = useContext(ctx).dispatch
    const activeCart = state?.shoppingCart || []
    const activeProducts = state?.products || []

    const emptyCart = () => {
        dispatch({
            type: "EMPTY_CART",
            payload: {id: 0, quantity: 0}
        })
        if (Object.keys(activeCart).length !== 0) toast.success("CART EMPTIED!")
    }
    let totalT = 0
    const [total, setTotal] = useState<number>(0)
    useEffect(() => {
        totalT = 0
        Object.keys(activeCart).map(id => {
            totalT = totalT +
                ((activeProducts.find(product => product.id === Number(id)) as ProductInterface).price as number)
                * activeCart[Number(id)] as number
        })
        setTotal(totalT)
    }, [state])

    return (
        <>
            <div className="cartHeader">
                <div className="cartLeft">
                    <h1>Your Cart...</h1>
                </div>
                <div className="cartCenter"></div>
                <div className="cartRight">
                    <button onClick={emptyCart} className={
                        Object.keys(activeCart).length == 0 &&
                        "disabled" || "enabled"
                    }>
                        EMPTY CART
                    </button>
                </div>
            </div>
            <hr className="cartLineTop"/>
            <div className="cartTable">
                <div className="cartTableHeader">
                    <div className="cartTableHeaderItem column0">X</div>
                    <div className="cartTableHeaderItem column1">Item</div>
                    <div className="cartTableHeaderItem column2">Category</div>
                    <div className="cartTableHeaderItem column3">Price</div>
                    <div className="cartTableHeaderItem column4"></div>
                    <div className="cartTableHeaderItem column5">Quantity</div>
                    <div className="cartTableHeaderItem column6">Total</div>
                </div>
                {Object.keys(activeCart).length ? (
                    <>
                        {Object.keys(activeCart).map(id => (
                            <CartItem id={Number(id)} key={id}/>
                        ))}
                    </>
                ) : (
                    <h3>Cart Is Empty</h3>
                )}
            </div>

            <div className="cartTotal">TOTAL = <></>
                 {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total) ?? 0}
            </div>
            <hr className="cartLineBottom"/>
            <div className="cartFooter">
                <button onClick={() => {
                    if (Object.keys(activeCart).length !== 0) toast.success("Order Submitted!")
                }} className={
                    Object.keys(activeCart).length == 0 &&
                    "disabled" || "enabled"
                }>Place Order
                </button>
            </div>
        </>
    )
}


export default Cart;
