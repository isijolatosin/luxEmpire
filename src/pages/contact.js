import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import logo from "../assets/images/B&G-logo1.png"
import emailjs from "emailjs-com"

const Contact = ({
  data: {
    allContentfulRecipe: { nodes: resultData },
  },
}) => {
  const [contactInfo, setContactInfo] = React.useState({
    name: "",
    email: "",
    message: "",
  })
  const handleChangeContact = e => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value })
  }

  const contactParams = {
    name: contactInfo?.name,
    message: contactInfo?.message,
    client: contactInfo?.email,
  }

  const handleSubmit = e => {
    e.preventDefault()
    emailjs
      .send(
        "service_gtimr9g",
        "template_s20pqnj",
        contactParams,
        "user_trCtSiPOmjsEtAADPhq71"
      )
      .then(res => {
        // console.log(res)
      })
      .catch(err => console.log(`booking: ${err}`))
    // navigate("/")
    setContactInfo({ name: "", email: "", message: "" })
  }

  return (
    <div>
      <Layout>
        <main className="page">
          <section className="contact-page">
            <article className="contact-info">
              <div className="contact-logo">
                <img src={logo} alt="B&G Luxury Empire logo" />
              </div>
              <div className="contact-text">
                <h3>We are here at your service!</h3>
                <p>
                  Taking time out each day to relax and renew is essential to
                  living well.
                </p>
              </div>
            </article>
            <article>
              <form onSubmit={handleSubmit} className="form contact-form">
                <div className="form-row">
                  <label htmlFor="name">your name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={contactInfo.name}
                    onChange={handleChangeContact}
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="email">your email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={contactInfo.email}
                    onChange={handleChangeContact}
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="message">message</label>
                  <textarea
                    type="text"
                    name="message"
                    id="message"
                    value={contactInfo.message}
                    onChange={handleChangeContact}
                  ></textarea>
                </div>
                {contactInfo.name && contactInfo.email && contactInfo.message && (
                  <button onClick={handleSubmit} className="btn block">
                    submit
                  </button>
                )}
              </form>
            </article>
          </section>
        </main>
      </Layout>
    </div>
  )
}

export default Contact

export const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        prepTime
        cookTime
        id
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      totalCount
    }
  }
`
