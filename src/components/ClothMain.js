import React from "react"
import Cloth from "./Cloth"
import ClothComponents from "./ClothComponents"

const ClothMain = ({ data }) => {
  const {
    id,
    sales,
    title,
    photos,
    price,
    description: { description },
  } = data

  return (
    <div className="cloth-wrapper">
      <div>
        <Cloth id={id} images={photos} title={title} />
      </div>
      <ClothComponents
        id={id}
        sales={sales}
        title={title}
        price={price}
        images={photos}
        description={description}
      />
    </div>
  )
}

export default ClothMain
