import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"
import { FiShoppingCart } from "react-icons/fi"
import { MdAddReaction } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import {
  addToCartItem,
  increaseCartItem,
  selectCartItems,
} from "../../slices/appSlices"
import { isInCart } from "./utils/helpers"

function SpaList({ spasData = [] }) {
  const [showMore, setShowMore] = React.useState(null)
  const [icon, setIcon] = React.useState(null)
  const [added, setAdded] = React.useState(false)
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  return (
    <div className="spas-list">
      {spasData?.map(spa => {
        const {
          title,
          id,
          description: { description },
          image,
          serving: price,
        } = spa
        const pathToImage = getImage(image)
        const slug = slugify(title, { lower: true }) //this takes out the space between the title and slug it. without this, the url will throw an error. Instead of passing the title to the link directly, we slug before passing.

        const handleMouseOver = () => {
          setShowMore(id)
        }
        const handleMouseLeave = () => {
          setShowMore(null)
        }

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
          <div className="spa-wrapper">
            <div
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
              key={spa.id}
            >
              <Link id={id} key={id} to={`/${slug}`} className="spa">
                <GatsbyImage
                  image={pathToImage}
                  alt={title}
                  className="spa-img"
                />

                <div
                  className={id === showMore ? "read-more show" : "read-more"}
                >
                  <span>Read More | add to cart</span>
                </div>
              </Link>
            </div>
            <div className="spa-info">
              <div>
                <div>
                  <p className="spa-info-title">{title}</p>
                  <p>{description.substring(0, 75)}...</p>
                  <span className="spa-info-price">CA$ {price} |</span>
                </div>
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
                    <span>ADD MORE | </span>
                    <FiShoppingCart />
                    {icon === id && (
                      <div className={added ? "added added-show" : "added"}>
                        <MdAddReaction />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SpaList
