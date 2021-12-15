import { StaticImage } from "gatsby-plugin-image"
import React from "react"
// import FetchData from "../examples/fetchData"
// import { useStaticQuery, graphql } from "gatsby"

export default function Home() {
  return (
    <main className="page-main">
      <header className="hero">
        <StaticImage
          src="../assets/images/bg.jpeg"
          alt="hero-image"
          className="hero-img"
          placeholder="tracedSVG"
          layout="fullWidth"
        />
        <div className="hero-container"></div>
        <div className="hero-text">
          <span>Glow your face & vitality with our best service</span>
          <h4>
            We provide beauty and treatment services with best quality, believe
            us.
          </h4>
        </div>
      </header>
    </main>
  )
}
