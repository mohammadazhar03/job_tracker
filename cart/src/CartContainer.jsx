import React from 'react'
import CartItems from './CartItems'
import { useGlobalContext } from './Context'
const CartContainer =()=>{
    const {cartItems,cart,total,clearCart}= useGlobalContext();

    if(cart.length===0){
    return (
        <section className="cart">
            <header>
                <h2>your bag</h2>
                <h4 className="empty-cart">is currentyly empty</h4>
            </header>
        </section>
    )
} 

return (
    <section className="cart">
        <header>
            <h2>your bag</h2>
        </header>
        <div>
            {cart.map((items)=>{
                return <CartItems key={items.id} {...items}/>
            })}
        </div>
        <footer>
            <hr />
            <div className="cart-total">
                <h4>Total<span>${total}</span></h4>
            </div>
            <button className="clear-btn btn" onClick={clearCart}>clear cart</button>
        </footer>
    </section>
)
}

export default CartContainer
