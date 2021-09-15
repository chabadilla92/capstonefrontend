import React from 'react'
import VideoPlayer from "./videoplayer"
import { graphql, StaticQuery } from 'gatsby'


const Popup = (props) => {


return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <p>This is the popup component</p>
        <StaticQuery
            query={graphql`
                query  {
                    contentfulVideoPost {
                        video {
                            file {
                                url
                             }
                        }
                    }
                }
            `}
            render={data => (
                <VideoPlayer 
                    videoSrcURL={data.contentfulVideoPost.video[0].file.url}
                    // videoTitle={data.contentfulVideoPost.video[0].title}
                />
            )}
            />
        <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
        </div>
    </div>
) : "";
}

export default Popup;

