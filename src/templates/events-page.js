import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { getImage } from 'gatsby-plugin-image'
import FullWidthImage from '../components/FullWidthImage'

// eslint-disable-next-line
export const EventsPageTemplate = ({ title, image, content }) => {
  const heroImage = getImage(image) || image

  return (
    <div className="content">
      <FullWidthImage img={heroImage} imgPosition="top" title={title} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section has-text-centered">
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>
        </div>
      </section>
    </div>
  )
}

EventsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const EventsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <EventsPageTemplate
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  )
}

EventsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EventsPage

export const pageQuery = graphql`
  query EventsPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
