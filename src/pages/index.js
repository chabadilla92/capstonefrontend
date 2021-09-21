import * as React from "react"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Menu from "../components/Globals/Menu"
import ReactPlayer from 'react-player'

const IndexPage = ({ data }) => (
  <Layout>
    {/* <BackgroundSection 
    img={data.img.childImageSharp.fluid}
    title="tyler1 Official Website"
    styleClass="default-background"
    /> */}
  
<div style={{position:"relative"}}>
    

      <div style={{position: "relative", paddingTop:"56.25%"}}>
        <ReactPlayer 
          url="https://www.youtube.com/watch?v=aR-KAldshAE"
          playing="true"
          loop="true"
          volume="null"
          muted="true"
          width="100%"
          height="100%"
          style={{position: "absolute", top: 0, left: 0}}
        />
      </div>
    <div className="mx-auto bg-black bg-opacity-50 d-flex flex-col align-items-center" style={{position:"absolute", inset: "0"}}>
      <div className="title mx-auto" style={{color:"white", fontSize: "50px"}}>TYLER1 OFFICIAL WEBSITE</div>
    </div>
  </div>

  <Menu items={data.menu}/>



    
  </Layout>
);


export const query = graphql`
{

  menu: allContentfulShirt {
		edges {
			node {
				id
                title
                description {
					description
                }
                price
                category
                image {
					fixed(width:50, height:50) {
						...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`;

export default IndexPage



