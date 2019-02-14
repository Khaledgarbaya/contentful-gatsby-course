import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <div className="lessons">
      {data.allContentfulLesson.edges.map(({ node }) => (
        <div className="lessons__item">{node.title}</div>
      ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  {
    allContentfulLesson {
      edges {
        node {
          title
        }
      }
    }
  }
`

export default IndexPage
