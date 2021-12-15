const express = require("express")
// const cors = require("cors")
const serverless = require("serverless-http")
require("dotenv").config({ path: "./.env" })
const createCheckoutSession = require("../api/checkout")

const app = express()
app.use(express.json())
// app.use(cors({ origin: true }))

const router = express.Router()

app.use("/", router)
app.post("/create-checkout-session", createCheckoutSession)

module.exports.handler = serverless(app)
