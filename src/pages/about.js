import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Layout, TeamCardsLayout } from '../components'
import { convertMarkdownToHtml } from '../utils/utils'

const AboutStyle = styled.section`
  .gatsby-image-wrapper {
    max-height: 100%;
    height: 400px;
    margin: 0 0 1.45rem;
  }
  line-height: 1.5;
  h1 {
    transition: 0.5s;
  }
  .banner-section {
    position: relative;
    h1 {
      color: #fff;
      font-size: 50px;
      position: absolute;
      text-align: center;
      top: 50%;
      width: 100%;
    }
    .banner-image {
      object-fit: cover;
      width: 100%;
      height: 400px;
    }
  }

  .text-section {
    :hover {
      h1 {
        color: #fcbc19;
      }
    }
    padding-bottom: 40px;
    padding-left: 15px;
    padding-right: 15px;

    h3,
    h2 {
      margin-bottom: 10px;
      font-size: 1.38316rem;
    }
    ul {
      margin-left: 0px;
    }
    li {
      list-style: none;
      padding-bottom: 30px;
      padding-left: 30px;
    }

    a {
      color: #000;
      :hover {
        color: #fcbc19;
      }
    }

    .team {
    }
  }
  .content2 {
    li {
      padding-bottom: 3px !important;
    }
  }

  @media (min-width: 992px) {
    .text-section {
      padding-bottom: 40px;
      width: 800px;
      margin: auto;

      li {
        list-style: none;
        padding-bottom: 30px;
      }
    }

    .team {
      .img-description {
        padding-left: 15px;
        h2 {
          font-size: 24px !important;
        }
      }
    }
  }
`

export const AboutTemplate = props => {
  return (
    <AboutStyle>
      <section className="banner-section">
        {props.coverImage && props.coverImage.childImageSharp ? (
          <Img
            fluid={props.coverImage.childImageSharp.fluid}
            alt="cover"
            objectFit="contain"
          />
        ) : (
          <img className="banner-image" src={props.coverImage} alt="cover" />
        )}
      </section>
      <section
        className="text-section"
        dangerouslySetInnerHTML={{
          __html: convertMarkdownToHtml(props.html1),
        }}
      />
      <section className="text-section">
        <TeamCardsLayout data={props.leadershipData} />
      </section>
      <section
        className="text-section content2"
        dangerouslySetInnerHTML={{
          __html: convertMarkdownToHtml(props.html2),
        }}
      />
    </AboutStyle>
  )
}
const About = props => {
  const data = props.data
  const leadershipData =
    data && data.leadership
      ? data.leadership.childMarkdownRemark.frontmatter
      : {}
  const content = props.preview || data.content.childMarkdownRemark.frontmatter

  return (
    <Layout>
      <AboutTemplate
        coverImage={content.coverImage}
        html1={content.content1}
        html2={content.content2}
        leadershipData={leadershipData}
      />
    </Layout>
  )
}

export default About

export const query = graphql`
  query {
    leadership: file(name: { eq: "leadership" }) {
      childMarkdownRemark {
        frontmatter {
          header
          leaders {
            firstName
            lastName
            about
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            description
          }
        }
      }
    }

    content: file(name: { eq: "about-content" }) {
      childMarkdownRemark {
        frontmatter {
          coverImage {
            childImageSharp {
              fluid(maxWidth: 1020, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          content1
          content2
        }
      }
    }
  }
`
