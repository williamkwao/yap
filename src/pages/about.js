import React from 'react'
import { graphql } from 'gatsby'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'
import { Layout, TeamCardsLayout } from '../components'
import styled from 'styled-components'

const AboutStyle = styled.section`
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
const covertMarkdownToHtml = markdown =>
  remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(markdown)
    .toString()

export const AboutTemplate = props => {
  return (
    <AboutStyle>
      <section className="banner-section">
        <img className="banner-image" src={props.coverImage} alt="Yap Banner" />
      </section>
      <section
        className="text-section"
        dangerouslySetInnerHTML={{
          __html: covertMarkdownToHtml(props.html1),
        }}
      />
      <section className="text-section">
        <TeamCardsLayout data={props.leadershipData} />
      </section>
      <section
        className="text-section content2"
        dangerouslySetInnerHTML={{
          __html: covertMarkdownToHtml(props.html2),
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
            image
            description
          }
        }
      }
    }

    content: file(name: { eq: "about-content" }) {
      childMarkdownRemark {
        frontmatter {
          coverImage
          content1
          content2
        }
      }
    }
  }
`
