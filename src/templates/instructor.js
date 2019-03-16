import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';

function Instructor({ data }) {
  return (
    <Layout>
      <div className="md:flex flex-row">
        <Img 
          className='shadow-md'
          style={{
            width: '100%' // important for respect the flexing
          }}
          resolutions={{
            ...data.contentfulInstructor.avatar.resolutions,
            base64: data.contentfulInstructor.avatar.sqip.dataURI
          }}
          alt={data.contentfulInstructor.fullName} />

        <div className='px-4 py-4'>
          <h2 className='text-4xl my-3'>{data.contentfulInstructor.fullName}</h2>
          <div>{data.contentfulInstructor.bio.bio}</div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
query instructorQuery($slug: String!){
  contentfulInstructor(slug:{eq: $slug}) {
      fullName
      avatar {
        sqip(numberOfPrimitives: 30, blur: 0){
          dataURI
        }
        resolutions(width: 500, height: 500) {
          ...GatsbyContentfulResolutions_withWebp_noBase64
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
