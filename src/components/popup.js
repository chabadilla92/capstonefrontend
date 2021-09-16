import React, { useState } from 'react'
import VideoPlayer from "./videoplayer"
import { graphql, StaticQuery } from 'gatsby'

import './popup.css'


const Popup = (props) => {
console.log('props', props)
const [links, setLinks] = useState(null);

const newFunc = () => {
    {props.url.map(y => (
        y.node.video.map(x => (
            setLinks(x.id)
        ))
    ))}
}

console.log('id', links)

return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <p>This is the popup component</p>

            <div>
            <VideoPlayer 
                    videoSrcURL={null}
                    // videoTitle={data.allContentfulVideoPost.video[0].title}
                />
            </div>


        {/* <StaticQuery
            query={graphql`
                query {
                    allContentfulVideoPost {
                        edges {
                          node {
                            video {
                              file {
                                url
                              }
                              id
                              title
                            }
                          }
                        }
                      }
                    }
            `}
            render={data => (
                <VideoPlayer 
                    videoSrcURL={data.node.video[0].file.url}
                    // videoTitle={data.allContentfulVideoPost.video[0].title}
                />
            )}
            /> */}
        <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
        </div>
    </div>
) : null;
}

export default Popup;

export const popupQuery = graphql`
    query {
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
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
`