import * as React from "react"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Menu from "../components/Globals/Menu"
import Products from "../components/Globals/Products"

const Shop = ({ data }) => (
  <Layout>
    <BackgroundSection 
    img={data.img.childImageSharp.fluid}
    title="Shop Page"
    styleClass="default-background"
    />
    <Products />
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

export default Shop



