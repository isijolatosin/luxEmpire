import "firebase/auth"
import React from "react"
import AuthProvider from "./src/context/auth"
import { Provider } from "react-redux"
import { store, persistor } from "./store"
import { PersistGate } from "redux-persist/integration/react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

// const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY)
const stripePromise = loadStripe(
  "pk_live_51HQ4hKEQYNrdFg5DHXyrSX4CQm31PxWOptaG7Ga5JUh7jLxYjDf051iXpWg4bNgBy6SgbbMq7TK8OGieo2aNSF5u0076shl4Kz"
)

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AuthProvider>
        <Elements stripe={stripePromise}>{element}</Elements>
      </AuthProvider>
    </PersistGate>
  </Provider>
)
