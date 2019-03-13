import React from 'react';
import { graphql } from 'gatsby';

function Instructor({ data }) {
  return (
    <div className="instructor__details">
        <h2>{data.contentfulInstructor.fullName}</h2>
        <img src={data.contentfulInstructor.avatar.file.url} alt={data.contentfulInstructor.fullName} />
        <div>{data.contentfulInstructor.bio.bio}</div>
    </div>
  );
}

export const query = graphql`
query instructorQuery($slug: String!){
  contentfulInstructor(slug:{eq: $slug}) {
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
}
`
export default Instructor;
