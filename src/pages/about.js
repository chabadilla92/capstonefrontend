import * as React from "react"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import BackgroundSection from "../components/Globals/BackgroundSection"

const AboutPage = ({ data }) => (
  <Layout>
    <BackgroundSection 
    img={data.img.childImageSharp.fluid}
    title="About Me"
    styleClass="default-background"
    />
  </Layout>
);


export const query = graphql`
{
	img:file(relativePath:{eq:"about-background.jpeg"}) {
		childImageSharp{
			fluid {
				...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`;
;
export default AboutPage;



