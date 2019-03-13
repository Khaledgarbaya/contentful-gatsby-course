import React from 'react';
import { graphql } from 'gatsby';

function Lesson({ data }) {
  return (
    <div className="lesson__details">
        <h2>{data.contentfulLesson.title}</h2>
        <div>{data.contentfulLesson.description.description}</div>
    </div>
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
