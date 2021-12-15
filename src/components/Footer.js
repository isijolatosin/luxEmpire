import React from "react"
import { IoLogoInstagram } from "react-icons/io"
import { FiFacebook } from "react-icons/fi"
import { RiTwitterLine } from "react-icons/ri"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-container">
        <div className="footer-text-line">
          <p>
            &copy; {new Date().getUTCFullYear()} <span>B&G Luxury Empire</span>
          </p>
          <span>• All right reserved</span>
        </div>
        <div className="footer-text-line">
          <p>website develop by - </p>
          <p>
            <a
              href="https://www.linkedin.com/in/oluwatosin-isijola-33333ba8/"
              target="_blank"
            >
              Oluwatosin Isijola
            </a>
          </p>
        </div>
      </div>
      <div className="footer-social">
        <Link to="https://www.instagram.com/bgluxuryglow/" target="_blank">
          <IoLogoInstagram size={20} className="footer-social-icon" />
        </Link>
        <Link to="" target="_blank">
          <FiFacebook size={20} className="footer-social-icon" />
        </Link>
        <Link to="" target="_blank">
          <RiTwitterLine size={20} className="footer-social-icon" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
