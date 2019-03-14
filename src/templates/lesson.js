import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout'
function Lesson({ data }) {
  return (
    <Layout>
      <div className="lesson__details">
        <h2>{data.contentfulLesson.title}</h2>
        <div>{data.contentfulLesson.description.description}</div>
      </div>
    </Layout>
  );
}

export const query = graphql`
query lessonQuery($slug: String!){
  contentfulLesson(slug:{eq: $slug}) {
    title
    description {
      description
    }
    instructor {
      fullName
      avatar {
        file {
          url
        }
      }
      bio {
        bio
      }
      twitter
      website
    }
    code {
      name
      url
    }
    tags {
      name
    }
  }
}
`
export default Lesson;
