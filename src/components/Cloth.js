import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useDispatch } from "react-redux"
import { setGroupId, setModal } from "../../slices/appSlices"

function Cloth({ id, images, title }) {
  const [index, setIndex] = React.useState(0)
  const [showMore, setShowMore] = React.useState(null)

  const dispatch = useDispatch()
  const handleMouseOver = () => {
    setIndex(1)
    setShowMore(id)
  }
  const handleMouseLeave = () => {
    setIndex(0)
    setShowMore(null)
  }
  const handleClick = () => {
    dispatch(setGroupId(id))
    dispatch(setModal(true))
  }
  return (
    <div className="image-card">
      <GatsbyImage
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        image={getImage(images[index])}
        alt={title}
        className="cloth-image"
      />
      <span
        className={
          showMore ? "cloth-overlay cloth-overlay-show" : "cloth-overlay"
        }
      >
        {title} |<span onClick={handleClick}> Expand Photos</span>
      </span>
    </div>
  )
}

export default Cloth
