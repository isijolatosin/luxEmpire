import "firebase/auth"
import React from "react"
import AuthProvider from "./src/context/auth"
import { Provider } from "react-redux"
import { store, persistor } from "./store"
import { PersistGate } from "redux-persist/integration/react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY)

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AuthProvider>
        <Elements stripe={stripePromise}>{element}</Elements>
      </AuthProvider>
    </PersistGate>
  </Provider>
)
