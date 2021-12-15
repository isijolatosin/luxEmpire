import React from "react"
import { FiShoppingCart } from "react-icons/fi"
import { AiFillStar } from "react-icons/ai"
import { MdAddReaction } from "react-icons/md"
import { isInCart } from "./utils/helpers"
import { useDispatch, useSelector } from "react-redux"
import {
  addToCartItem,
  increaseCartItem,
  selectCartItems,
} from "../../slices/appSlices"

const ClothComponents = ({ title, id, images, price, description, sales }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const image = images[0]?.gatsbyImageData
  const product = { title, id, image, price, description }
  const MAX_RATING = 5
  const MIN_RATING = 1
  const [rating] = React.useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  )
  const [icon, setIcon] = React.useState(null)
  const [added, setAdded] = React.useState(false)

  const addToCart = () => {
    dispatch(addToCartItem(product))
    setIcon(id)
    setTimeout(() => {
      setAdded(true)
    }, 300)
  }
  const increaseItem = () => {
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
    <div className="cloth-bottom">
      <div className="cloth-price">
        <div className="cloth-price-left">
          <span>{`CA$ ${price}`}</span>
          {sales && <span className="sales">On sales</span>}
        </div>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <AiFillStar className="cloth-rating" />
          ))}
      </div>
      {!isInCart(product, cartItems) ? (
        <div onClick={addToCart} className="add-to-cart bttn">
          <span>ADD TO CART |</span>
          <FiShoppingCart />
          {icon === id && (
            <div className={added ? "added added-show" : "added"}>
              <MdAddReaction />
            </div>
          )}
        </div>
      ) : (
        <div onClick={increaseItem} className="add-to-cart2 bttn">
          <span>ADD MORE |</span>
          <FiShoppingCart />
          {icon === id && (
            <div className={added ? "added added-show" : "added"}>
              <MdAddReaction />
            </div>
          )}
        </div>
      )}

      <div className="cloth-info">
        <span>{title}</span>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ClothComponents
