import React from 'react'
import { graphql } from 'gatsby'

import InstructorItem from '../components/instructor-item'
import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <div className="lessons">
      {data.allContentfulInstructor.edges.map(({ node }) => (
        <InstructorItem instructor={node} key={node.id}/>
      ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  {
    allContentfulInstructor {
      edges {
        node {
          id
          fullName
          slug
          avatar {
            file {
              url
            }
          }
          bio {
            bio
          }
        }
      }
    }
  }
`

export default IndexPage
