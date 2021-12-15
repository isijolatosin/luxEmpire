import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

const Canceled = () => {
  return (
    <Layout>
      <div className="canceled-page">
        <h1>Payment Failed</h1>
        <div>
          <span>Payment was not successful</span>
        </div>
        <Link to="/">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </Layout>
  )
}

export default Canceled
