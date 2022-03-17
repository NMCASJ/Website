import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import FullWidthImage from '../components/FullWidthImage'

const AboutPageTemplate = ({ image, title, heading, html }) => {
  const heroImage = getImage(image) || image

  return (
    <div className="content">
      <FullWidthImage img={heroImage} title={title} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section has-text-centered">
            <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  html: PropTypes.string,
}

const AboutPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        html={html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        description
      }
      html
    }
  }
`
