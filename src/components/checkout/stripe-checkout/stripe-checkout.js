import React, { useContext } from "react"
// import { useStripe } from "@stripe/react-stripe-js"
import { fetchFromAPI } from "../../utils/helpers"
import {
  clearCartItem,
  selectCartItems,
  selectTotal,
} from "../../../../slices/appSlices"
import { useSelector, useDispatch } from "react-redux"
import { BsBagCheck } from "react-icons/bs"
import { AuthContext } from "../../../context/auth"
import {
  CANADA,
  FREE_SHIPPING_AMOUNT,
  SHIPPING_COST,
  CURRENCY,
} from "../../../../const"

const StripeCheckout = () => {
  const cartItems = useSelector(selectCartItems)
  // const stripe = useStripe()
  const [email, setEmail] = React.useState("")
  const [errorMessage, setErrorMessage] = React.useState(null)
  const [allowproceed, setAllowProceed] = React.useState(false) //CHANGE BACK TO FALSE
  const [address, setAddress] = React.useState({
    street: "",
    city: "",
    province: "",
    postalcode: "",
    country: "",
  })
  const [shippingCost, setShippingCost] = React.useState({
    country: "",
    cost: "",
  })
  const [error, setError] = React.useState(false)
  const dispatch = useDispatch()
  const { user } = useContext(AuthContext)
  const inputOnchangeHandler = e => {
    setAddress({ ...address, [e.target.name]: e.target.value })
  }
  const total = useSelector(selectTotal)
  // Submit address
  const handleSubmitAddress = () => {
    const shippingAd = `${address.street}, ${address.city}. ${address.province}. ${address.postalcode}. ${address.country}`

    if (!user || !email) {
      setError(true)
    }
    if (
      (user &&
        address?.street &&
        address?.city &&
        address?.province &&
        address?.postalcode &&
        address?.country) ||
      (email &&
        address?.street &&
        address?.city &&
        address?.province &&
        address?.postalcode &&
        address?.country)
    ) {
      localStorage.setItem("address", shippingAd)
      // dispatch(setShippingObject(shippingAd))
      setAllowProceed(true)
      setAddress({
        street: "",
        city: "",
        province: "",
        postalcode: "",
        country: "",
      })
      // setEmail("")
      setError(false)
    }
    Object.keys(SHIPPING_COST).filter(
      cntry =>
        cntry.toLowerCase() === address.country.toLowerCase() &&
        setShippingCost({
          country: cntry,
          cost: SHIPPING_COST[cntry],
        })
    )
  }

  // Proceed function
  const StripeRedirectToCheckout = async e => {
    e.preventDefault()
    if (allowproceed) {
      // line items
      const line_items = cartItems.map(item => {
        const description = `${item.description.substring(0, 200)}...`
        return {
          quantity: item.quantity,
          price_data: {
            currency: CURRENCY,
            unit_amount: item.price * 100, //amount is in center
            product_data: {
              name: item.title,
              description: description,
            },
          },
        }
      })

      // shipping options
      const shipping_options =
        total >= FREE_SHIPPING_AMOUNT && shippingCost.country === CANADA
          ? [
              {
                shipping_rate_data: {
                  type: "fixed_amount",
                  fixed_amount: {
                    amount: 0,
                    currency: CURRENCY,
                  },
                  display_name: "Free shipping",
                  // Delivers between 5-7 business days
                  delivery_estimate: {
                    minimum: {
                      unit: "business_day",
                      value: 5,
                    },
                    maximum: {
                      unit: "business_day",
                      value: 7,
                    },
                  },
                },
              },
            ]
          : [
              {
                shipping_rate_data: {
                  type: "fixed_amount",
                  fixed_amount: {
                    amount: shippingCost.cost * 100,
                    currency: CURRENCY,
                  },
                  display_name: "Paid Delivery",
                  // Delivers in exactly 1 business day
                  delivery_estimate: {
                    minimum: {
                      unit: "business_day",
                      value: 5,
                    },
                    maximum: {
                      unit: "business_day",
                      value: 7,
                    },
                  },
                },
              },
            ]

      const response = await fetchFromAPI("create-checkout-session", {
        body: {
          line_items,
          shipping_options,
          customer_email: user ? user?.email || user?.user?.email : email,
        },
      })
      const { sessionId } = response
      const { error } = await stripe?.redirectToCheckout({
        sessionId,
      })

      if (error) {
        setErrorMessage(error.message)
      }
    }
  }

  return (
    <form onSubmit={StripeRedirectToCheckout}>
      <div className="shipping-add-header">
        <div className="ship-head">
          <p>Shipping - Cost</p>
        </div>
        <div className="ship-countries">
          <ul>
            <li>canada - CA$ {SHIPPING_COST.canada}</li>
            <li>usa - CA$ {SHIPPING_COST.usa}</li>
            <li>london - CA$ {SHIPPING_COST.london}</li>
          </ul>
        </div>
      </div>
      <div className="inputs">
        {!user && (
          <input
            type="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            value={email}
            className={
              error && !email
                ? "user-email-input input-error"
                : "user-email-input"
            }
          />
        )}
        <input
          name="street"
          type="text"
          value={address.street}
          onChange={inputOnchangeHandler}
          placeholder="Address"
          className={
            error && !address.street
              ? "user-email-input input-error"
              : "user-email-input"
          }
        />
        <input
          name="city"
          type="text"
          value={address.city}
          onChange={inputOnchangeHandler}
          placeholder="City"
          className={
            error && !address.city
              ? "user-email-input input-error"
              : "user-email-input"
          }
        />
        <input
          name="province"
          type="text"
          value={address.province}
          onChange={inputOnchangeHandler}
          placeholder="Province"
          className={
            error && !address.province
              ? "user-email-input input-error"
              : "user-email-input"
          }
        />
        <input
          name="postalcode"
          type="text"
          value={address.postalcode}
          onChange={inputOnchangeHandler}
          placeholder="Postal Code"
          className={
            error && !address.postalcode
              ? "user-email-input input-error"
              : "user-email-input"
          }
        />
        <input
          name="country"
          type="text"
          value={address.country}
          onChange={inputOnchangeHandler}
          placeholder="Country"
          className={
            error && !address.country
              ? "user-email-input input-error"
              : "user-email-input"
          }
        />
        <span onClick={handleSubmitAddress} className="btn block subt-add">
          SUBMIT ADDRESS
        </span>
      </div>
      {email.substr(email.length - 3) === "com" && (
        <div className="email-verify">
          <span>Please verify you have the correct email and address</span>
        </div>
      )}
      {error && email.length < 1 && (
        <div className="user-email-input-error">
          <span>Hey! You have missing credentials!</span>
        </div>
      )}
      <div className="total-button">
        <button
          onClick={() => !allowproceed && setError(true)}
          className="btn total-btn"
          type="submit"
        >
          PROCEED |{" "}
          <span>
            <BsBagCheck />
          </span>
        </button>

        <span
          onClick={() => dispatch(clearCartItem())}
          className="btn block total_btn"
        >
          CLEAR CART
        </span>
      </div>
      {errorMessage && (
        <div className="checkout-error">
          <span>{errorMessage}</span>
        </div>
      )}
    </form>
  )
}

export default StripeCheckout
