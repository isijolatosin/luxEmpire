import { Link, navigate } from "gatsby"
import React, { useState, useContext } from "react"
import Layout from "../components/Layout"
import firebase from "gatsby-plugin-firebase"
import { AuthContext } from "../context/auth"
import { db } from "../../firebase"
import { setLogin } from "../../slices/appSlices"
import { useDispatch } from "react-redux"

const Register = () => {
  const dispatch = useDispatch()
  const [authUser, setAuthUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    error: null,
  })

  const { setUser } = useContext(AuthContext)

  const handleChangeAuthUser = e => {
    setAuthUser({ ...authUser, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setAuthUser({ ...authUser, error: null })
    try {
      const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(authUser.email, authUser.password)
      setUser(result)
      navigate("/")
    } catch (error) {
      setAuthUser({ ...authUser, error: error.message })
    }

    db.collection("users")
      .doc(`${authUser.email}/`)
      .collection("user-profile")
      .add({
        name: authUser.name,
        email: authUser.email,
        phone: authUser.phone,
        password: authUser.password,
      })
      .then(() => {
        console.log(`SUCCESSFULL`)
      })
      .catch(error => console.log("Error" + error.message))

    dispatch(setLogin(false))
  }

  return (
    <div>
      <Layout>
        <section className="register-page">
          <div className="register-page-header">
            <h1>Create Account</h1>
            <p>
              By creating account with us, you consent to receiving newsletters
              or promotions from{" "}
              <Link to="/">
                <span>B&G Luxury Empire.</span>
              </Link>
            </p>
          </div>
          <article className="register-form">
            <div className="register-form-bg"></div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="email">your name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={authUser.name}
                  onChange={handleChangeAuthUser}
                />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={authUser.email}
                  onChange={handleChangeAuthUser}
                />
              </div>
              <div className="form-row">
                <label htmlFor="password">your password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={authUser.password}
                  onChange={handleChangeAuthUser}
                />
              </div>
              <div className="form-row">
                <label htmlFor="email">your cell phone (optional)</label>
                <input
                  type="number"
                  name="phone"
                  id="number"
                  value={authUser.phone}
                  onChange={handleChangeAuthUser}
                />
              </div>
              <div className="error-message">
                {authUser.error ? <p>Error message{authUser.error}</p> : null}
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn block btn-top-space"
              >
                - CREATE ACCOUNT -
              </button>
            </form>
          </article>
          <div className="register">
            <p>
              Already have an account with us?{" "}
              <Link to="/">
                <button>Login</button>
              </Link>{" "}
            </p>
          </div>
          <div className="register-policy-container">
            <p className="register-policy">
              This site is protected by Google{" "}
              <Link to="https://policies.google.com/privacy">
                <span>Privacy Policy</span>
              </Link>{" "}
              and{" "}
              <Link to="https://policies.google.com/terms">
                <span>Terms of Service</span>
              </Link>{" "}
              apply
            </p>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default Register
