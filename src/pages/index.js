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
  MemberSection,
} from '../components'
import { parseEventsFromMarkdown } from '../utils/utils'

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
    console.log('props', this.props)
    window.setTimeout(() => {
      this.setState({ splash: false })
    }, 1000)
  }
  render() {
    const data = this.props.data
    const events = data.events.childMarkdownRemark.frontmatter.event
    const parsedEventsData = parseEventsFromMarkdown(events)
    const landingText = data.landingText.childMarkdownRemark.frontmatter
    console.log('data', landingText)
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
          <LandingSectionCard />
        </YapSection>
        <YapSection id="events">
          <EventsSection>
            <h1 className="title">Upcoming Events</h1>
            <Events eventsData={parsedEventsData} />
          </EventsSection>
        </YapSection>
        <YapSection id="membership">
          <MemberSection />
        </YapSection>
        <YapSection id="leadership">
          <TeamCardsLayout />
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
  }
`

export default IndexPage
