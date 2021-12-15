import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

function ProductsList({ recipes = [] }) {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const { title, id, image, prepTime, cookTime } = recipe

        const pathToImage = getImage(image)
        const slug = slugify(title, { lower: true }) //this takes out the space between the title and slug it. without this, the url will throw an error. Instead of passing the title to the link directly, we slug before passing.

        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="recipe-img"
            />
            <h5>{title}</h5>
            <p>
              Prep: {prepTime} min | Cook: {cookTime} min
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default ProductsList
