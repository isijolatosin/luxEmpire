import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Modal = ({ data }) => {
  const pathToImage = getImage(data)
  // console.log(pathToImage)
  return (
    <div className="">
      <GatsbyImage image={pathToImage} alt={""} />
    </div>
  )
}

export default Modal
