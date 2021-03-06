import React from 'react'
import { graphql } from 'gatsby'

import InstructorItem from '../components/instructor-item'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title='eggheadio instructors' description='egghead instructors are industry veterans with years of practical,
from-the-trenches experience building real software at all scales.'/>
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
