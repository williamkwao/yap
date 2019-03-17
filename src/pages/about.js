import React from 'react'
import { graphql } from 'gatsby'
import { Layout, TeamCardsLayout } from '../components'
import styled from 'styled-components'
import diasporaImg from '../images/diaspora1.jpg'

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

    h3 {
      margin-bottom: 10px;
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

const About = props => {
  const data = props.data
  const leadershipData = data.leadership.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <AboutStyle>
        <section className="banner-section">
          <img className="banner-image" src={diasporaImg} alt="Yap Banner" />
        </section>
        <section className="text-section">
          <h1>WHAT WE DO</h1>
          <p>
            As the premier conveners of events and opportunities for young
            African professionals in the diaspora, our mission is to connect
            young African diaspora professionals to career development and
            opportunity creation. We fulfill this mission providing timely and
            relevant resources, facilitating innovative professional development
            experiences, fostering inspirational networking, and encouraging
            impactful community building. These goals advance our vision to
            address the professional needs of young Africans in the diaspora;
            support more Africans in positions of power and influence; and
            positively influence narratives about the continent.
          </p>
          <ul>
            <li>
              <h3>Provide Resources</h3>
              <p>
                We are excited about the growth of our network over the years.
                Whether you are a budding entrepreneur, a recent graduate, or a
                seasoned professional, you can enjoy preferred access to
                tailored professional development resources and career-building
                opportunities available on our various online platforms.
              </p>
            </li>
            <li>
              <h3>Facilitate Professional Development</h3>
              <p>
                Whether you are considering an advanced degree or looking to
                advance in the workplace, our curated workshops and networking
                events provide special access to unique professional development
                opportunities, help you launch entrepreneurial aspirations and
                advance in your career.
              </p>
            </li>
            <li>
              <h3>Foster Networking and Encourage Community Building</h3>
              <p>
                Our online networking platform can help you elevate your
                networking by connecting you to other ambitious, driven, young
                diaspora professionals like you! This space is for you to
                continue conversations after an event, meet people with similar
                interests, and build communities of support and
                collaboration.&nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://yapdc.mn.co"
                >
                  Become a member today!
                </a>
              </p>
            </li>
          </ul>
        </section>
        <section className="text-section">
          <h1>WHO WE ARE</h1>
          <li>
            <p>
              YAP DC has always been operated by dedicated and highly skilled
              volunteers. The public and our members are our clients, and we
              treat them as such. In late 2018, we stood up a Board of Directors
              and re-structured our Operations Team to maintain YAP DC’s
              501(c)(3) status and manage operational transitions from year to
              year. The Board is the highest governing body of the organization,
              responsible for establishing the vision, mission and overall
              direction of the organization. Let’s meet the team.
            </p>
          </li>
        </section>
        <section className="text-section team">
          <TeamCardsLayout data={leadershipData} />
        </section>
        <section className="text-section">
          <h1>OPERATIONS TEAM</h1>
          <li>
            <p>
              The operations team consists of volunteers who serve as the core
              leaders in envisioning and executing the day to day matters in
              line with the strategic priorities of the organization. Working
              with YAP DC is an invaluable and unique experience. If you are
              interested in being a member of the team, you can view our vacant
              positions &nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.idealist.org/en/nonprofit/b55e85ab2beb4d85b447f4092f56e754-young-african-professionals-dc-yap-dc-washington"
              >
                here.
              </a>
            </p>
            <h3>MEMBERS</h3>
            <p> Rose Essiem </p>
            <p> Rumbidzai Mufuka</p>
            <p> Fatmatta Wurie </p>
            <p> Sika Dunyoh </p>
            <p> Chinwe Emeruem</p>
            <p> Thelma Ekeocha </p>
            <p> Cornelia Poku</p>
          </li>
        </section>
      </AboutStyle>
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
  }
`
