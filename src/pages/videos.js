import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Popup from '../components/popup'
import VideoPlayer from "../components/videoplayer"



const VideosPage = ( {data} ) => {
  // console.log(props)
const [buttonPopup, setButtonPopup] = useState(false);
const [single, setSingle] = useState(null);


return (
  <div>
    <p>VideosPage</p>
    {data.allContentfulVideoPost.edges.map(vid => (
      <div key={vid.node.video[0].id}>
        <h3>{vid.node.title}</h3>
        <button onClick={() => setButtonPopup(true)}><img src={vid.node.image.file.url} alt="Images"></img></button>
      </div>
    ))}
    <Popup trigger={buttonPopup} setTrigger={setButtonPopup} url={data.allContentfulVideoPost.edges}/>
  </div>
)

        
        {/* {vid.node.video.map(x => (
          <div> */}

          {/* <VideoPlayer videoSrcURL={x.file.url} /> */}
          {/* <Popup key={x.id} url={x.file.url} trigger={buttonPopup} triggerOne={single} setTrigger={setButtonPopup}></Popup>
          </div>
    ))} */}
        
      
  
  

// return (<div>asdsd
//         <p>VideosPage</p>
//         {data.allContentfulVideoPost.edges.map(vid => (
//             <div key={vid.node.video[0].id}>
//                 <h3>{vid.node.title}</h3>
//                 <button onClick={() => setButtonPopup(true)}><img src={vid.node.image.file.url} alt="Images"></img></button>
//                 <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
//             </div>
//          ))} 
//         </div> 
// )  
}



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

export default VideosPage;