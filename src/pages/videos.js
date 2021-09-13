import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'



const VideosPage = ({ data }) => (
        <div>
        <p>VideosPage</p>
        {data.allContentfulVideoPost.edges.map(vid => (
            <div key={vid.node.video[0].id}>
                <h3>{vid.node.title}</h3>

                <Link to={`/videos/${vid.node.slug}/`}>{vid.node.slug}</Link>
            </div>
        ))}
        </div>   
)



export const videoPageQuery = graphql`
    query VideoIndexQuery {
            allContentfulVideoPost {
              edges {
                node {
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
            }
    }
`

export default VideosPage;