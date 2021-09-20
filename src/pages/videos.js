import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Popup from '../components/popup'
import VideoPlayer from "../components/videoplayer"
import Layout from "../components/Layout"
import Title from "../components/Globals/Title"

const VideosPage = ( {data} ) => {
  // console.log(props)
const [buttonPopup, setButtonPopup] = useState(false);
const [single, setSingle] = useState(null);

const handleClick = (vid) => {
      setButtonPopup(true)
      setSingle(vid.node.video[0].file.url)
}

return (
  <div>
    <Layout>
    <Title title="Featured Gameplay"/>
    <div className="container my-4">
      <div className="row">
        
          {data.allContentfulVideoPost.edges.map(vid => (
          <div className="col-10 col-sm-8 col-md-6 col-lg-6 mx-auto my-3">
          <div key={vid.node.video[0].id}>
          <h4>{vid.node.title}</h4>
          <button className="vidbutton" onClick={() => {handleClick(vid)}}><img src={vid.node.image.file.url} alt="Images"></img></button>
            </div>
        </div>
    ))}
        
       </div>
     </div> 
    <Popup trigger={buttonPopup} single={single} setTrigger={setButtonPopup} url={data.allContentfulVideoPost.edges}/>
      

    </Layout>
  </div>
)

        

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