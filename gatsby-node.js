/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const slash = require("slash")

exports.createPages = ({graphql, actions}) => {
    const { createPage } = actions; 
    
    return graphql(
        `
        {
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
    ).then((result) => {
        if (result.errors) {
            console.log("Error with contentful data", result.errors)
        }

        const videoTemplate = path.resolve('./src/templates/video.js')

        result.data.allContentfulVideoPost.edges.forEach(video => {
            createPage({
                path: `/videos/${video.node.slug}/`,
                component: slash(videoTemplate),
                context: {
                    slug: video.node.slug
                }
            })
        })
    }).catch(error => console.log("Error with contentful data", error))
}

