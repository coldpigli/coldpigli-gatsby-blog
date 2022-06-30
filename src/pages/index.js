import React from "react"
import Hero from "../components/HomePage/Hero"
import {graphql} from "gatsby"
import Layout from "../components/Layout"

export default function Home({data}) {
  console.log("Data", data);
  return <div>
    <Layout>
      <div>
          <Hero/>
      </div>
    </Layout>
  </div>
}

export const query = graphql`
query PageInfo {
  site {
    siteMetadata {
      description
      siteUrl
      title
    }
  }
}
`
