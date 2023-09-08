import * as React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import FullWidthImage from '../../components/FullWidthImage'
import { useStaticQuery, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

export default function BlogIndexPage() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "headers/new-mexico-2499015_1280.webp" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
    }
  `)
  const heroImage = getImage(data.file) || data.file

  return (
    <Layout>
      <FullWidthImage
        img={heroImage}
        imgPosition="top"
        title="Resources"
      />
      <section className="section">
        <div className="container">
          <div className="content">
            <BlogRoll />
          </div>
        </div>
      </section>
    </Layout>
  )
}
