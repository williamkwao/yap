import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import {
  TeamCardsLayout,
  Layout,
  Slider,
  SEO,
  Events,
  SocialMediaIcons,
  LandingSectionCard,
  SplashScreen,
  Sponsors,
} from '../components'
import { parseEventsFromMarkdown } from '../utils/utils'
import yapAppImg from '../images/yap-app.png'

const LandingSection = styled.section`
  overflow-x: hidden;
  /* Dextop Styles */
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 32% 68%;
  }
`
export const YapMission = styled.div`
  position: relative;
  h1 {
    transition: 0.5s;
    text-transform: uppercase;
  }

  a {
    color: #000;
  }
  a:hover {
    color: #fcbc19;
  }
  .social-icons {
    display: none;
  }

  @media (min-width: 992px) {
    margin-right: 81px;
    .social-icons {
      display: block;
      position: absolute;
      bottom: 25px;
    }
  }
`
const EventsSection = styled.section`
  min-height: 710px;
  h1 {
    text-align: right;
    text-transform: uppercase;
  }

  @media (min-width: 992px) {
    min-height: 800px;
    h1 {
      margin-bottom: 60px;
    }
  }
`

const MemberSection = styled.section`
  display: grid;
  h2 {
    transition: 0.5s;
  }
  /* p {
    padding-bottom: 20px;
  } */
  button {
    :focus {
      border: none;
    }
    :hover {
      background-color: #fcbc19;
      box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.25);
    }
    font-size: 18px;
    background: #000;
    color: #fff;
    padding: 19px 52px;
    transition: 0.5s;
    border: none;
  }
  .yap-app-screenshot {
    display: none;
    img {
      width: 100%;
      max-width: 100%;
    }
  }
  @media (min-width: 992px) {
    grid-template-columns: 35% 65%;
    .yap-app-screenshot {
      display: block;
    }
  }
`
const YapSection = styled.section`
  padding: 15px;
  .title {
    transition: 0.5s;
    font-size: 34px;
  }
  :hover {
    .title {
      color: #fcbc19;
    }
  }

  .center {
    text-align: center;
  }

  @media (min-width: 992px) {
    padding: 80px 35px;
    .no-padding {
      margin-top: -80px;
    }
  }
`

class IndexPage extends Component {
  state = {
    splash: true,
  }
  componentDidMount() {
    window.setTimeout(() => {
      this.setState({ splash: false })
    }, 1000)
  }
  render() {
    const data = this.props.data
    const events = data.events.childMarkdownRemark.frontmatter.event
    const parsedEventsData = parseEventsFromMarkdown(events)
    const landingText = data.landingText.childMarkdownRemark.frontmatter
    const landingCardsData =
      data.landingCards.childMarkdownRemark.frontmatter.cards
    const leadershipData = data.leadership.childMarkdownRemark.frontmatter
    return this.state.splash ? (
      <SplashScreen />
    ) : (
      <Layout>
        <SEO title="Home" keywords={[`YAP`, 'Young African Professionals']} />
        <YapSection>
          <LandingSection className="no-padding">
            <YapMission>
              <h1 className="title">{landingText.Title}</h1>
              <p>{landingText.text}</p>
              <Link to="/about">
                <p>{landingText.aboutLink}</p>
              </Link>
              <SocialMediaIcons />
            </YapMission>
            <Slider />
          </LandingSection>
          <LandingSectionCard data={landingCardsData} />
        </YapSection>
        <YapSection id="events">
          <EventsSection>
            <h1 className="title">Upcoming Events</h1>
            <Events eventsData={parsedEventsData} />
          </EventsSection>
        </YapSection>
        <YapSection id="membership">
          <MemberSection>
            <div>
              <h2 className="title">Become a Member of our YAP APP</h2>
              <p>
                We are proud to announce our NEW professional networking app for
                our YAP DC Membership. With over 10,000 members to date, we are
                excited to provide an innovative platform to continue to connect
                our community for career development opportunities.
              </p>
              <a href="https://yapdc.mn.co">
                <button>GET THE APP</button>
              </a>
            </div>
            <div className="yap-app-screenshot">
              <img src={yapAppImg} alt="Screen shot of mobile app" />
            </div>
          </MemberSection>
        </YapSection>
        <YapSection id="leadership">
          <TeamCardsLayout data={leadershipData} />
        </YapSection>
        <YapSection>
          <h1 className="title center">OUR PARTNERS AND SPONSORS</h1>
          <Sponsors />
        </YapSection>
      </Layout>
    )
  }
}
export const query = graphql`
  query {
    events: file(name: { eq: "events" }) {
      relativePath
      childMarkdownRemark {
        frontmatter {
          event {
            date
            name
            url
            address
          }
        }
      }
    }
    landingText: file(name: { eq: "landing-text" }) {
      childMarkdownRemark {
        frontmatter {
          Title
          text
          aboutLink
        }
      }
    }
    landingCards: file(name: { eq: "landing-cards" }) {
      childMarkdownRemark {
        frontmatter {
          cards {
            header
            description
            image
            link
          }
        }
      }
    }

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

export default IndexPage
