import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useDispatch } from "react-redux"
import { MdAddShoppingCart } from "react-icons/md"
import { BsCartDash } from "react-icons/bs"
import { GiTrashCan } from "react-icons/gi"
import { MdOutlineKeyboardArrowUp } from "react-icons/md"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import {
  decreaseCartItem,
  increaseCartItem,
  removeCartItem,
} from "../../slices/appSlices"

const CartItems = ({ product }) => {
  const { title, image, price, quantity, description, id } = product
  const [expand, setExpand] = React.useState(false)
  const dispatch = useDispatch()

  const pathToImage = getImage(image)

  const prdct = { title, id, image, price, description }
  const increaseItem = () => {
    dispatch(increaseCartItem(prdct))
  }
  const decreaseItem = () => {
    dispatch(decreaseCartItem(prdct))
  }
  const removeItem = () => {
    dispatch(removeCartItem(prdct))
  }

  return (
    <div className="cart-items-container">
      <div className="cart-image">
        <GatsbyImage image={pathToImage} alt={title} />
      </div>
      <div className="cart-item-info">
        <div>
          <h4>{title}</h4>
        </div>
        <div className="price-quantity">
          <span>{`Price: CA$ ${price}`}</span>
          <span>{`Quantity: ${quantity}`}</span>
        </div>
        <div className="description-readmore">
          {!expand && description.length >= 100 ? (
            <span>{description.substring(0, 50)}...</span>
          ) : (
            <span>{description}</span>
          )}
          {description.length >= 100 && (
            <span onClick={() => setExpand(!expand)} className="read_more">
              {expand ? (
                <>
                  <span>Read Less</span> <MdOutlineKeyboardArrowUp />
                </>
              ) : (
                <>
                  <span>Read More</span> <MdOutlineKeyboardArrowDown />
                </>
              )}
            </span>
          )}
        </div>
        <div className="cart-item-icons">
          <div className="cart-item-icon" onClick={increaseItem}>
            <MdAddShoppingCart />
            <span>Add</span>
          </div>
          {quantity === 1 && (
            <div className="cart-item-icon" onClick={removeItem}>
              <GiTrashCan />
              <span>Delete</span>
            </div>
          )}
          {quantity > 1 && (
            <div className="cart-item-icon" onClick={decreaseItem}>
              <BsCartDash />
              <span>Remove</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartItems
