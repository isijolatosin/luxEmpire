import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>Constrained / default</h4>
        <StaticImage
          src="../assets/images/big.jpg"
          alt="Picture-food"
          placeholder="tracedSVG"
          layout="constrained"
          as="section"
          className="example-img"
        />
      </article>
      <article>
        <h4>Fixed</h4>
        <StaticImage
          src="../assets/images/big.jpg"
          alt="Picture-food"
          placeholder="blurred"
          layout="fixed"
          height={200}
          as="div"
          className="example-img"
        />
      </article>
      <article>
        <h4>Full Width</h4>
        <StaticImage
          src="../assets/images/big.jpg"
          alt="Picture-food"
          placeholder="dorminantColor"
          layout="fullWidth"
          height={200}
          as="article"
          className="example-img"
        />
      </article>
    </Wrapper>
  )
}

export default Images

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid lightgray;
  }
  .example-img {
    border-radius: 1rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
