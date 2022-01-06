import React, { useContext } from "react"
import { Link, navigate } from "gatsby"
import firebase from "gatsby-plugin-firebase"
import { FiAlignJustify } from "react-icons/fi"
import { BsHandbag } from "react-icons/bs"
import { BsHandbagFill } from "react-icons/bs"
import { SiInternetarchive } from "react-icons/si"

import { AuthContext } from "../context/auth"
import logo from "../assets/images/B&G-logo1.png"
import { useDispatch, useSelector } from "react-redux"
import { selectLogin, setLogin, selectItemCount } from "../../slices/appSlices"
import { db } from "../../firebase"

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "bookings",
    path: "/bookings",
  },
  {
    name: "clothings",
    path: "/clothings",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "history",
    path: "/history",
  },
  {
    name: "checkout",
    path: "/checkout",
  },
]
const Navbar = () => {
  const [showLinks, setShowLinks] = React.useState(false)
  const { user } = useContext(AuthContext)
  const dispatch = useDispatch()
  const userInfo = localStorage.getItem("user-name")
  const login = useSelector(selectLogin)
  const itemCount = useSelector(selectItemCount)
  React.useEffect(() => {
    db.collection("users")
      .doc(`${user?.email}/`)
      .collection("user-profile")
      .onSnapshot(snapshot => {
        snapshot.docs.map(doc => {
          localStorage.setItem("user-name", doc.data().name)
          // setUserInfo(doc.data().name)
        })
      })
  }, [user])

  const handleLogout = async () => {
    await firebase.auth().signOut()
    dispatch(setLogin(true))
    // setUserInfo(null)
    navigate("/")
  }

  const handleToggle = () => {
    setShowLinks(!showLinks)
  }

  const alertLogin = () => alert("Please Login In To Access The Booking Path")

  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img
                src={logo}
                alt="B&G Luxury Empire logo"
                width="50"
                // height="600"
              />
            </Link>
            <div className="nav_btn-search">
              <Link to="/checkout">
                <div className="cart-count-mobile">
                  <div className="f_icon-mobile shopCart">
                    {itemCount === 0 ? (
                      <BsHandbag size={30} />
                    ) : (
                      <BsHandbagFill size={30} />
                    )}
                  </div>
                  {itemCount > 0 && (
                    <div className="cart-count-mobile-p">
                      <span>{itemCount}</span>
                    </div>
                  )}
                </div>
              </Link>
              <span onClick={handleToggle} className="nav-btn">
                <FiAlignJustify size={25} />
              </span>
            </div>
          </div>
          <div className="nav-links">
            <div className="_links">
              {links.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path === "/bookings" ? user && link.path : link.path}
                  className={
                    link.path === "/checkout" ? "nav-link hide" : "nav-link"
                  }
                  activeClassName="active-link"
                  onMouseOver={
                    !user && link.path === "/bookings" ? alertLogin : null
                  }
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="nav-right">
              <div className="contact-link">
                <Link
                  to="/contact"
                  className="btn"
                  activeClassName="active-link"
                >
                  Contact
                </Link>
              </div>
              <div className="nav-buttons">
                <div className="nav-right-icons">
                  <div className="f_icons">
                    <Link to="/history">
                      <div className="f_icon">
                        <SiInternetarchive size={24} />
                      </div>
                    </Link>
                    <Link to="/checkout">
                      <div className="cart-count">
                        <div className="f_icon shopCart">
                          {itemCount === 0 ? (
                            <BsHandbag size={30} />
                          ) : (
                            <BsHandbagFill size={30} />
                          )}
                        </div>
                        {itemCount > 0 && (
                          <div className="cart-count-p">
                            <span>{itemCount}</span>
                          </div>
                        )}
                      </div>
                    </Link>
                  </div>
                  <div className="status">
                    {user === null ? (
                      <div onClick={() => dispatch(setLogin(true))}>
                        <Link to="/">
                          <span className="login-logout">Login</span>
                        </Link>
                      </div>
                    ) : (
                      <div onClick={handleLogout}>
                        <span className="login-logout">Logout</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-user">
            {login === false && user && (
              <>
                <p>Welcome, </p>
                <span>{userInfo}</span>
              </>
            )}
          </div>
        </div>
      </nav>
      <div className={showLinks ? "show-links" : "show-nolnks"}>
        {links.map((link, idx) => (
          <Link
            key={idx}
            to={link.path === "/bookings" ? user && link.path : link.path}
            className="nav--link"
            activeClassName="active-link"
            onMouseOver={!user && link.path === "/bookings" ? alertLogin : null}
          >
            {link.name}
          </Link>
        ))}
        <div className="contact-link">
          <Link to="/contact" className="btn">
            Contact
          </Link>
        </div>
        <div className="status">
          {user === null ? (
            <div
              onClick={() => {
                dispatch(setLogin(true))
                setShowLinks(false)
              }}
            >
              <Link to="/">
                <span className="login-logout">Login</span>
              </Link>
            </div>
          ) : (
            <div onClick={handleLogout}>
              <span className="login-logout">Logout</span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
