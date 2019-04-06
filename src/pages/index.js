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
import SubscribeModal from '../components/subscribe/subscribeModal'

const LandingSection = styled.section`
  overflow-x: hidden;
  :hover {
    .mission {
      ::before {
        min-height: 90%;
        margin-bottom: 20px;
        min-width: 100px;
        padding-right: 50px;
        transition: 0.6s;
        border-left: 3px solid #fcbc19;
      }
    }
  }
  /* Dextop Styles */
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 32% 68%;
    :hover {
      #subtract {
        display: inline-block;
        visibility: visible;
        opacity: 1;
        max-width: 100%;
      }
    }
  }
`
export const YapMission = styled.div`
  position: relative;
  ::before {
    content: '';
    display: block;
    /* z-index: -30; */
    position: absolute;
    min-height: 30%;
    margin-bottom: 20px;
    min-width: 100px;
    padding-right: 50px;
    transition: 0.6s;
    border-left: 2px solid #000;
  }

  .content {
    padding-left: 12px;
  }
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
  position: relative;
  min-height: 710px;
  h1 {
    text-align: right;
    text-transform: uppercase;
  }

  :after {
    content: '';
    top: 0;
    right: 0;
    position: absolute;
    min-height: 40px;
    padding-right: 50px;
    transition: 0.6s;
    border-right: 2px solid #000;
  }

  .content {
    padding-right: 12px;
  }
  :hover {
    :after {
      content: '';
      top: 0;
      right: 0;
      position: absolute;
      min-height: 90%;
      padding-right: 50px;
      transition: 0.6s;
      border-right: 2px solid #fcbc19;
    }
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
  .members {
    position: relative;
    :before {
      content: '';
      display: block;
      /* z-index: -30; */
      position: absolute;
      min-height: 30%;
      margin-bottom: 20px;
      min-width: 100px;
      padding-right: 50px;
      transition: 0.6s;
      border-left: 2px solid #000;
    }
    :hover {
      ::before {
        min-height: 90%;
        margin-bottom: 20px;
        min-width: 100px;
        padding-right: 50px;
        transition: 0.6s;
        border-left: 3px solid #fcbc19;
      }
    }

    .members-section {
      padding-left: 12px;
    }
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
    const eventsData = data.events.childMarkdownRemark.frontmatter
    const parsedEventsData = {
      event: parseEventsFromMarkdown(eventsData.event),
      intro: eventsData.intro,
    }
    const landingText = data.landingText.childMarkdownRemark.frontmatter
    const landingCardsData =
      data.landingCards.childMarkdownRemark.frontmatter.cards
    const leadershipData = data.leadership.childMarkdownRemark.frontmatter
    const sponsorshipData = data.sponsors.childMarkdownRemark.frontmatter
    const membershipData = data.membership.childMarkdownRemark.frontmatter
    return this.state.splash ? (
      <SplashScreen />
    ) : (
      <Layout>
        <SEO title="Home" keywords={[`YAP`, 'Young African Professionals']} />
        <YapSection>
          <LandingSection className="no-padding">
            <YapMission className="mission">
              <div className="content">
                <h1 className="title">{landingText.Title}</h1>
                <p>{landingText.text}</p>
                <Link to="/about">
                  <p>{landingText.aboutLink}</p>
                </Link>
                <SocialMediaIcons />
              </div>
            </YapMission>
            <Slider />
          </LandingSection>
          <LandingSectionCard data={landingCardsData} />
        </YapSection>
        <YapSection id="events">
          <EventsSection>
            <div className="content">
              <h1 className="title">Upcoming Events</h1>
              <Events eventsData={parsedEventsData} />
            </div>
          </EventsSection>
        </YapSection>
        <YapSection id="membership">
          <div className="members">
            <MemberSection className="members-section" data={membershipData} />
          </div>
        </YapSection>
        <YapSection id="leadership">
          <TeamCardsLayout data={leadershipData} />
        </YapSection>
        <YapSection>
          <Sponsors data={sponsorshipData} />
        </YapSection>
        <SubscribeModal />
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
          intro
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
    membership: file(name: { eq: "membership-content" }) {
      childMarkdownRemark {
        frontmatter {
          header
          sectionText
          sectionImage {
            description
            image
          }
          appButton {
            text
            url
          }
          modalButtonText
          popup {
            actionButtonText
            buttonUrl
            content
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

    sponsors: file(name: { eq: "sponsors" }) {
      childMarkdownRemark {
        frontmatter {
          header
          sponsor {
            name
            image
            url
          }
        }
      }
    }
  }
`

export default IndexPage
