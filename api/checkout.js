const stripe = require("../stripe")

async function createCheckoutSession(req, res) {
  // domain name for production and localhost for development
  const DOMAIN_NAME = process.env.WEB_APP_URL
  //  getting out requirements to create checkout session
  const { line_items, customer_email, shipping_options } = req.body

  //  check if req body has line items and customer's email
  if (!line_items || !customer_email || !shipping_options) {
    return res
      .status(400)
      .json({ error: "missing required session parameters" })
  }

  let session

  try {
    session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      customer_email,
      shipping_options,
      success_url: `${DOMAIN_NAME}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${DOMAIN_NAME}/canceled`,
      shipping_address_collection: { allowed_countries: ["GB", "US", "CA"] },
    })
    res.status(200).json({ sessionId: session.id })
  } catch (error) {
    console.log(error)
    res
      .status(400)
      .json({ error: "an error occured, unable to create session" })
  }
}

module.exports = createCheckoutSession
