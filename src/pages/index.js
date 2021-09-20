import * as React from "react"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Menu from "../components/Globals/Menu"

const IndexPage = ({ data }) => (
  <Layout>
    <BackgroundSection 
    img={data.img.childImageSharp.fluid}
    title="tyler1 Official Website"
    styleClass="default-background"
    />
    <Menu items={data.menu}/>
  </Layout>
);


export const query = graphql`
{
	img:file(relativePath:{eq:"animated.jpeg"}) {
		childImageSharp{
			fluid {
				...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
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



