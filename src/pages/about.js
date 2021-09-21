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
    <div className="aboutme">
        Hi, my name is Tyler1. I am a twitch streamer, content creator, and entrepreneur. I started streaming over 10 years ago and I have not stopped since. I play a wide variety of games but my main game is League of Legends (LoL). Check me out on my other social media platforms! Hope you enjoy this site.
    </div>
  </Layout>
);


export const query = graphql`
{
	img:file(relativePath:{eq:"gaming.jpg"}) {
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



