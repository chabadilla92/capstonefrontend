import React, { useState } from 'react'
import VideoPlayer from "./videoplayer"
import { graphql, StaticQuery } from 'gatsby'

import './popup.css'


const Popup = (props) => {

return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <h4>Play</h4>
            <div>
            <VideoPlayer 
                    videoSrcURL={props.single}
                    // videoTitle={data.allContentfulVideoPost.video[0].title}
                />
            </div>

        <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
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