import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Popup from '../components/popup'
import VideoPlayer from "../components/videoplayer"
import Layout from "../components/Layout"


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
    <p>VideosPage</p>
    {data.allContentfulVideoPost.edges.map(vid => (
      <div key={vid.node.video[0].id}>
        <h3>{vid.node.title}</h3>
        <button onClick={() => {handleClick(vid)}}><img src={vid.node.image.file.url} alt="Images"></img></button>
      </div>
    ))}
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