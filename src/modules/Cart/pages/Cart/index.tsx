/* Cart Page
################################### Restaurant Functional Module ###################################
Module: Cart
/modules/Cart/pages/Cart/stateReducers.tsx    ::: Cart Page
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import {useContext, useEffect, useRef, useState} from "react";
import {CartItem} from "src/modules/Cart/containers/Cart";
import {ctx} from "src/context";
import toast from "react-hot-toast";
import {ProductInterface} from 'src/reducer/stateReducers';
import "src/modules/Cart/pages/cartPages.css"
import Confirmation from "src/components/modals/modals.tsx";

const Cart: React.FC = () => {
    const state = useContext(ctx).state
    const localState = useContext(ctx).localState;
    const localDispatch = useContext(ctx).localDispatch
    const dialogRef= useRef<HTMLDialogElement>(null);

    const emptyCart = () => {
        const confirm = true;
        if (confirm) {
            localDispatch({
                type: "EMPTY_CART",
                payload: {}
            })
            if (Object.keys(localState.shoppingCart).length !== 0) toast.success("CART EMPTIED!")
        }
    }

    const [total, setTotal] = useState<number>(0)
    useEffect(() => {
        const activeProducts = state?.products || []

        let cartTotal = 0;
        Object.keys(localState.shoppingCart).map(id => {
            cartTotal = cartTotal +
            ((activeProducts.find(product => product.id === (id)) as ProductInterface)?.price || 0)
            * localState.shoppingCart[(id)] as number
        })
        setTotal(cartTotal)
    }, [localState, state?.products])

    return (
        <>
            <div className="cartHeader">
                <div className="cartLeft">
                    <h1>Your Cart...</h1>
                </div>
                <div className="cartCenter"></div>
                <div className="cartRight">
                    <button onClick={() =>
                        (Object.keys(localState.shoppingCart).length > 0) && dialogRef.current?.showModal()
                    } className={
                        Object.keys(localState.shoppingCart).length == 0 &&
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
                {Object.keys(localState.shoppingCart).length ? (
                    <>
                        {Object.keys(localState.shoppingCart).map(id => (
                            <CartItem id={(id)} key={id}/>
                        ))}
                    </>
                ) : (
                    <h3>Cart Is Empty</h3>
                )}
            </div>

            <div className="cartTotal">TOTAL = <></>
                {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(total) ?? 0}
            </div>
            <hr className="cartLineBottom"/>
            <div className="cartFooter">
                <button onClick={() => {
                    if (Object.keys(localState.shoppingCart).length !== 0) toast.success("Order Submitted!")

                }} className={
                    Object.keys(localState.shoppingCart).length == 0 && "disabled" || "enabled"
                }>Place Order
                </button>
            </div>
            <Confirmation modalDialog={"Empty cart and remove all items?"} responseText={"Yes"}
                           responseAction={() => emptyCart()} dialogRef={dialogRef} />
        </>
    )
}


export default Cart;
