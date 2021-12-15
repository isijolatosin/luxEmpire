import React from "react"
import SpaList from "./SpaList"
import { graphql, useStaticQuery } from "gatsby"
import Search from "./Search"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        prepTime
        cookTime
        serving
        id
        title
        description {
          description
        }
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const SpasLists = () => {
  const {
    allContentfulRecipe: { nodes: data },
  } = useStaticQuery(query)

  const [search, setSearch] = React.useState("")
  const [filterData, setFilterData] = React.useState([])

  const handleSearch = e => {
    e.preventDefault()

    // Filter data by search parameters
    const filteredData = []
    data.filter(item => {
      const itemTitle = item.title.toLowerCase()
      if (itemTitle.includes(search.toLowerCase())) {
        filteredData.push(item)
      }
    })

    setSearch("")
    setFilterData(filteredData)
  }

  const handleChange = e => {
    setSearch(e.target.value)
  }

  return (
    <section>
      <div className="spas-container">
        <div>
          <div className="spas-search">
            <Search
              onChange={handleChange}
              search={search}
              onSearch={handleSearch}
              data1={filterData}
            />
          </div>
          <SpaList spasData={filterData.length !== 0 ? filterData : data} />
        </div>
      </div>
    </section>
  )
}

export default SpasLists
