import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock } from "react-icons/bs"
import { GiTakeMyMoney } from "react-icons/gi"
import Layout from "../components/Layout"
import { FiShoppingCart } from "react-icons/fi"
import { MdAddReaction } from "react-icons/md"
import { useSelector, useDispatch } from "react-redux"
import {
  addToCartItem,
  increaseCartItem,
  selectCartItems,
} from "../../slices/appSlices"
import { isInCart } from "../components/utils/helpers"

const DynamicPage = ({ data: { contentfulRecipe } }) => {
  const {
    id,
    title,
    cookTime,
    content,
    prepTime,
    serving: price,
    description: { description },
    image,
  } = contentfulRecipe

  const pathToImage = getImage(image)
  const { instructions, ingredients, tools, benefits } = content
  const [added, setAdded] = React.useState(false)
  const [icon, setIcon] = React.useState(null)
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const product = { title, id, image, price, description }
  const addToCart = () => {
    dispatch(addToCartItem(product))
    setIcon(id)
    setTimeout(() => {
      setAdded(true)
    }, 300)
  }

  const IncreaseItem = () => {
    dispatch(increaseCartItem(product))
    setIcon(id)
    setTimeout(() => {
      setAdded(true)
    }, 300)
  }

  if (added) {
    setTimeout(() => {
      setAdded(false)
    }, 2000)
  }
  return (
    <Layout>
      <main className="dynamic-page">
        <div className="product-page">
          {/* hero */}
          <section className="product-hero">
            <div className="single-container">
              <GatsbyImage
                image={pathToImage}
                alt={title}
                className="single-image"
              />
              {!isInCart(product, cartItems) ? (
                <div onClick={addToCart} className="add-to-cart">
                  <span>ADD TO CART |</span>
                  <FiShoppingCart />
                  {icon === id && (
                    <div className={added ? "added added-show" : "added"}>
                      <MdAddReaction />
                    </div>
                  )}
                </div>
              ) : (
                <div onClick={IncreaseItem} className="add-to-cart2">
                  <span>ADD MORE |</span>
                  <FiShoppingCart />
                  {icon === id && (
                    <div className={added ? "added added-show" : "added"}>
                      <MdAddReaction />
                    </div>
                  )}
                </div>
              )}
            </div>
            <article className="product-info">
              <h2>{title}</h2>
              <p>{description}</p>

              <div className="product-icons">
                {/* <article>
                  <BsClock />
                  <h5>Prep time</h5>
                  <p>{prepTime} mins</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>Cook time</h5>
                  <p>{cookTime} mins</p>
                </article> */}
                <article>
                  <GiTakeMyMoney />
                  <h5>Price</h5>
                  <p>CA${price}</p>
                </article>
              </div>
            </article>
          </section>
          <section className="product-content">
            <article className="product-content-first">
              <h4>Instructions</h4>
              {instructions.map((instruct, idx) => (
                <div key={idx} className="single-instruction">
                  <header>
                    <p>Step {idx + 1}</p>
                    <div></div>
                  </header>
                  <p>{instruct}</p>
                </div>
              ))}
            </article>
            <article className="second-column">
              <div>
                <h4>Ingredients</h4>
                {ingredients.map((ing, idx) => (
                  <p key={idx} className="single-product">
                    {ing}
                  </p>
                ))}
              </div>
              {tools && (
                <div>
                  <h4>Tools</h4>
                  {tools.map((tool, idx) => (
                    <p key={idx} className="single-tool">
                      {tool}
                    </p>
                  ))}
                </div>
              )}
              {benefits && (
                <div>
                  <h4>Benefits</h4>
                  {benefits.map((benefit, idx) => (
                    <p key={idx} className="single-tool">
                      {benefit}
                    </p>
                  ))}
                </div>
              )}
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}
export default DynamicPage

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      id
      title
      cookTime
      content {
        ingredients
        instructions
        benefits
        tags
      }
      description {
        description
      }
      prepTime
      serving
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`
