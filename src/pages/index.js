import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { FaGulp } from 'react-icons/fa'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi People</h1>
    <FaGulp/>
  </Layout>
)

export default IndexPage



