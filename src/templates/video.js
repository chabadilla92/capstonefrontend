import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link'

import VideoPlayer from "../components/videoplayer"

const Video = ({ data }) => {
    return (
        <div>
        <h1>Individual Video Page</h1>
        <p>{data.vid.title}</p>
        <VideoPlayer
          videoSrcURL={data.vid.video[0].file.url}
        />
        <Link to="/videos">Go Back</Link>
        </div>
    )
};

export default Video; 


export const pageQuery = graphql`
    query($slug: String!) {
        vid: contentfulVideoPost(slug: {eq: $slug}) {
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