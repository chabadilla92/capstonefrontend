import * as React from "react"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import BackgroundSection from "../components/Globals/BackgroundSection"


const IndexPage = ({ data }) => (
  <Layout>
    <BackgroundSection 
    img={data.img.childImageSharp.fluid}
    title="tyler1 Official Website"
    styleClass="default-background"
    />
  </Layout>
);


export const query = graphql`
{
	img:file(relativePath:{eq:"default-background.jpeg"}) {
		childImageSharp{
			fluid {
				...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`;

export default IndexPage



