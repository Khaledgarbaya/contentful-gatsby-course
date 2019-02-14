import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    {data.allContentfulLesson.edges.map(({ node }) => (
      <li>{node.title}</li>
    ))}
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
