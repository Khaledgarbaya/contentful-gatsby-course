import React from 'react'
import { graphql } from 'gatsby'

import LessonItem from '../components/lesson-item'
import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <div className="lessons">
      {data.allContentfulLesson.edges.map(({ node }) => (
        <LessonItem lesson={node} key={node.id}/>
      ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  {
    allContentfulLesson {
      edges {
        node {
          id
          title
          slug
          image {
            file {
              url
            }
          }
          description {
            description
          }
        }
      }
    }
  }
`

export default IndexPage
