import React, { useContext, useState } from "react"
import { Link, navigate } from "gatsby"
import firebase from "gatsby-plugin-firebase"
import { AuthContext } from "../context/auth"
import { IoMdClose } from "react-icons/io"
import { setLogin } from "../../slices/appSlices"
import { useDispatch } from "react-redux"

const Login = () => {
  const dispatch = useDispatch()
  const [isReset, setIsReset] = React.useState(false)
  const [authUser, setAuthUser] = useState({
    email: "",
    password: "",
    error: null,
  })

  const { setUser } = useContext(AuthContext)
  const [showpswd, setShowpswd] = useState(false)

  const handleChangeAuthUser = e => {
    setAuthUser({ ...authUser, [e.target.name]: e.target.value })
  }

  const togglePassword = () => {
    setShowpswd(!showpswd)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setAuthUser({ ...authUser, error: null })
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(authUser.email, authUser.password)
      if (result) {
        setUser(result)
        navigate("/")
        dispatch(setLogin(false))
      }
    } catch (error) {
      setAuthUser({ ...authUser, error: error.message })
    }
  }

  const resetPassword = email => {
    firebase
      .auth()
      .sendPasswordResetEmail(authUser.email)
      .then(() => {
        try {
          setIsReset(true)
        } catch (error) {
          console.log(`error message - ${error.message}`)
        }
      })
  }

  return (
    <>
      <main className="login">
        <section className="login-page">
          <div className="login-close">
            <IoMdClose
              onClick={() => dispatch(setLogin(false))}
              size={25}
              color="white"
            />
          </div>
          <div className="login-page-header">
            <h1>Account Login Page</h1>
            <p>
              Fill in your login credentials to gain access to your personal and
              cart history page.
            </p>
          </div>
          <article>
            <form onSubmit={handleSubmit} className="login-form">
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
                  type={showpswd ? "text" : "password"}
                  name="password"
                  id="password"
                  value={authUser.password}
                  onChange={handleChangeAuthUser}
                />
                <div className="toggle-pswd">
                  Show Password
                  <input type="checkbox" onClick={togglePassword} />
                </div>
              </div>
              <div className="error-message">
                {authUser.error ? <p>{authUser.error}</p> : null}
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn block"
              >
                - GAIN ACCESS -
              </button>
            </form>
          </article>
          <div className="register">
            <span>
              Forgot Password? |{" "}
              <span
                onClick={() => resetPassword(authUser.email)}
                className="login-reset-password"
              >
                Reset
              </span>
            </span>
            {isReset && (
              <div className="login-reset-msg">
                <span>{`A password reset link has been sent to this email - ${authUser.email}`}</span>
              </div>
            )}
            <p className="create-acc-btn">
              Not a Member?
              <Link to="/register">
                <button>Create Account</button>
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Login
