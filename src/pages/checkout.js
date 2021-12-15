import React from "react"
import { useSelector } from "react-redux"
import Layout from "../components/Layout"
import CartItems from "../components/CartItems"
import {
  selectCartItems,
  selectItemCount,
  selectTotal,
} from "../../slices/appSlices"
import Total from "../components/Total"

const Checkout = () => {
  const itemCount = useSelector(selectItemCount)
  const total = useSelector(selectTotal)
  const cartItems = useSelector(selectCartItems)

  return (
    <Layout>
      <div className="cart">
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <div className="empty">Your Cart is Empty</div>
        ) : (
          <div className="cart-container">
            <div>
              <div className="cart-left">
                {cartItems.map(item => (
                  <CartItems product={item} key={item.id} />
                ))}
              </div>
            </div>
            <div className="total">
              <Total itemCount={itemCount} total={total} />
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Checkout
