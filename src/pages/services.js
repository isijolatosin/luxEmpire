import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const Services = ({
  data: {
    allContentfulServices: { nodes: data },
  },
}) => {
  console.log(data)
  return (
    <Layout>
      <main className="service-wrapper">
        <div className="service-bg"></div>
        {data?.map((item, idx) => (
          <div className="service-info">
            <div className="service-info-header">
              <span>{item.serviceHero}</span>
            </div>
            <div className="service-info-body">
              <span>{item.description.description}</span>
            </div>
          </div>
        ))}
      </main>
    </Layout>
  )
}

export default Services

export const query = graphql`
  {
    allContentfulServices(sort: { fields: serviceHero }) {
      nodes {
        serviceHero
        description {
          description
        }
      }
    }
  }
`
