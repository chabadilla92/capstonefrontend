import React from 'react';
import { graphql } from 'gatsby';

const Video = ({ data }) => {
    return (
        <div>
        <h1>Video Page</h1>
        <p>{data.videoo.title}</p>
        </div>
    )
};

export default Video; 


export const pageQuery = graphql`
    query($slug: String!) {
        videoo: contentfulVideoPost(slug: {eq: $slug}) {
            slug
            video {
              id
              description
              title
              file {
                url
              }
            }
            title
        }
    }
`