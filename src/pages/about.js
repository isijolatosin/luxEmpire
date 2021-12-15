import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { IoLogoInstagram } from "react-icons/io"
import { FiFacebook } from "react-icons/fi"
import { RiTwitterLine } from "react-icons/ri"

const About = () => {
  return (
    <Layout>
      <section className="about-page">
        <StaticImage
          src="../assets/images/owner.jpeg"
          alt="Delicacies"
          className="about-img"
          placeholder="traceSVG"
        />
        <article>
          <h4>Cynthia</h4>
          <h5>Founder/Director</h5>
          <div className="about-social">
            <IoLogoInstagram size={20} className="about-social-icon" />
            <FiFacebook size={20} className="about-social-icon" />
            <RiTwitterLine size={20} className="about-social-icon" />
          </div>
          <p>
            Hi there! My name is Cynthia and I am the proud owner of B&G Luxury
            Empire in the North York Area, Toronto. Canada. Since I pursued
            being an estheticians, it was definitely not easy for me. There were
            times where I wanted to give up or quit, but I am glad I didn’t
            because years later, I love my job and everyone I met along the way.
            <br />
            <br /> The experience and the relationships that are built in this
            industry are unbelievable. I am very thankful for my clients and our
            spa dates because without their trust and time spent during our
            sessions, I would not be where I am today. Lastly, I have had the
            pleasure to work and teach hard working and dream driven ladies who
            I call my family, the #b&gluxuryempire.
          </p>
          <Link to="/contact" className="btn">
            Contact
          </Link>
        </article>
      </section>
    </Layout>
  )
}

export default About
