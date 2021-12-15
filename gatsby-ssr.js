const React = require("react")
const { Provider } = require("react-redux")
const { store, persistor } = require("./store")
const { PersistGate } = require("redux-persist/integration/react")
const { Elements } = require("@stripe/react-stripe-js")
const { loadStripe } = require("@stripe/stripe-js")

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY)

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Elements stripe={stripePromise}>{element}</Elements>
      </PersistGate>
    </Provider>
  )
}
