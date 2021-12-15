import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

const Error = () => {
  return (
    <div>
      <Layout>
        <main className="error-page">
          <section>
            <h2>Page not Found</h2>
            <h5>
              Oops! The page you are looking for has been removed or relocated
            </h5>
            <button>
              <Link to="/">Go Back</Link>
            </button>
          </section>
        </main>
      </Layout>
    </div>
  )
}

export default Error
