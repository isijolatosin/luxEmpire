import { HTTPS_LINK } from "../../../const"

export const isInCart = (product, cartItems) => {
  return cartItems.find(item => item.id === product.id)
}

// This is where the server is running. When we deploy the app, this will be the hosting url
const API = HTTPS_LINK

export async function fetchFromAPI(endpoint, opts) {
  const { method, body } = { method: "POST", body: null, ...opts }

  const res = await fetch(`${API}/${endpoint}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      "Content-Type": "application/json",
    },
  })

  return res.json()
}
