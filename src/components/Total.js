import React from "react"
import StripeCheckout from "./checkout/stripe-checkout/stripe-checkout"

const Total = ({ itemCount, total }) => {
  return (
    <div>
      <div className="total-top">
        <p>Total Items: {itemCount}</p>
        <span>{`Amount to Pay: CA$ ${total}`}</span>
      </div>
      <StripeCheckout />
    </div>
  )
}

export default Total
