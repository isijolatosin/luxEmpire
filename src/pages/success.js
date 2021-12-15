import { Link } from "gatsby"
import React, { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearCartItem, selectCartItems } from "../../slices/appSlices"
import Layout from "../components/Layout"
import { db } from "../../firebase"
import { AuthContext } from "../context/auth"
import emailjs from "emailjs-com"
import { AUTHORIZED_ID } from "../../const"

const Success = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const { user } = useContext(AuthContext)
  const userName = localStorage.getItem("user-name")
  const userAddress = localStorage.getItem("address")
  const customerName = localStorage.getItem("user-name")

  const messageParams = {
    name: userName,
    message: `Thank you for your patronage. Your order has been processed.`,
    client: user?.email,
  }

  // push data to FB
  setTimeout(() => {
    user?.email &&
      cartItems.length !== 0 &&
      cartItems.map(item => {
        // shopping path
        db.collection("users")
          .doc(`${user?.email}/`)
          .collection("shoppings")
          .add({
            id: item.id,
            title: item.title,
            description: item.description,
            quantity: item.quantity,
            price: item.price,
            address: userAddress,
            customer: customerName,
          })
          .then(() => {
            console.log(`SUCCESSFULL`)
          })
          .catch(error => console.log("Error" + error.message))
        // admin path
        db.collection("admin")
          .doc(`${AUTHORIZED_ID}/`)
          .collection("all-purchased")
          .add({
            id: item.id,
            title: item.title,
            description: item.description,
            quantity: item.quantity,
            price: item.price,
            address: userAddress,
            customer: customerName,
          })
          .then(() => {
            console.log(`SUCCESSFULL`)
          })
          .catch(error => console.log("Error" + error.message))
      })

    dispatch(clearCartItem())
  }, 5000)

  setTimeout(() => {
    SendClientSuccessfulPurchaseEmail()
  }, 10000)

  // generate automated email to client
  const SendClientSuccessfulPurchaseEmail = () => {
    emailjs
      .send(
        "service_gtimr9g",
        "template_7pjokln",
        messageParams,
        "user_trCtSiPOmjsEtAADPhq71"
      )
      .then(res => {})
      .catch(err => console.log(err))
  }

  return (
    <Layout>
      <div className="success-page">
        <h1>Thank you for your purchase</h1>
        <div>
          <span>
            We are currently processing your order and will send you a
            confirmation email shortly
          </span>
        </div>
        <Link to="/">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </Layout>
  )
}

export default Success
