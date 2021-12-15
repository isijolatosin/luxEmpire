import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

function Category({ recipes = [] }) {
  return (
    <div className="category-container">
      {recipes.map(recipe => {
        const {
          title,
          id,
          image,
          description: { description },
        } = recipe

        const pathToImage = getImage(image)
        const slug = slugify(title, { lower: true }) //this takes out the space between the title and slug it. without this, the url will throw an error. Instead of passing the title to the link directly, we slug before passing.

        return (
          <div className="category-product">
            <Link key={id} to={`/${slug}`}>
              <GatsbyImage
                image={pathToImage}
                alt={title}
                className="category-image"
              />
            </Link>
            <div className="category-info">
              <h5>{title}</h5>
              <p>{description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Category
