import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  const data = useStaticQuery(getData)
  // console.log(data)
  return (
    <div>
      {/* you can display data in the UI */}
      <h1>Hello from fetch function</h1>
    </div>
  )
}

export default FetchData
