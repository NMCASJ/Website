import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Features from '../components/Features'
import FullWidthImage from '../components/FullWidthImage'

// eslint-disable-next-line
export const IndexPageTemplate = ({ image, mission, main, html }) => {
  const heroImage = getImage(image) || image

  return (
    <div>
      <FullWidthImage
        img={heroImage}
        // title={title}
        style={{ backgroundColor: '#F7BF4F' }}
        // subheading={subheading}
      />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{main.title}</h1>
                    </div>
                    <div className="tile">
                      <h4 className="subttle">{main.description}</h4>
                    </div>
                  </div>
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mission.title}</h1>
                    </div>
                    <div className="tile">
                      <h4
                        className="subtitle"
                        dangerouslySetInnerHTML={{ __html: html }}
                      ></h4>
                    </div>
                  </div>
                  {/* <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {body.title}
                      </h3>
                      <p dangerouslySetInnerHTML={{ __html: html }}></p>
                    </div>
                  </div> */}
                  <Features gridItems={mission.blurbs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  main: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  mission: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    blurbs: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        text: PropTypes.string,
      })
    ),
  }),
  html: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        mission={frontmatter.mission}
        main={frontmatter.main}
        html={html}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          url: publicURL
        }
        main {
          title
          description
        }
        mission {
          title
          blurbs {
            text
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
          }
        }
      }
      html
    }
  }
`
