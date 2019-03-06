import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
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
import yapAppImg from '../images/yap-app.png'

const LandingSection = styled.section`
  overflow-x: hidden;
  /* Dextop Styles */
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 32% 68%;
  }
`
const YapMission = styled.div`
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
    return this.state.splash ? (
      <SplashScreen />
    ) : (
      <Layout>
        <SEO title="Home" keywords={[`YAP`, 'Young African Professionals']} />
        <YapSection>
          <LandingSection className="no-padding">
            <YapMission>
              <h1 className="title">WHO WE ARE</h1>
              <p>
                The Young African Professionals DC (YAP DC) is a 501(c)3
                organization based in Washington, D.C. For 16 years, YAP DC has
                grown into a respected network of more than 10,000 young African
                professionals across the DC Metro area and the diaspora. Our
                mission is to connect young African professionals for career
                development and opportunity creation.
              </p>
              <Link to="/about">
                <p>Learn More</p>
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
            <Events />
          </EventsSection>
        </YapSection>
        <YapSection id="membership">
          <MemberSection>
            <div>
              <h2 className="title">Become a YAP DC Premium Member</h2>
              <p>
                If you love the opportunities that you get from the basic YAP DC
                membership, we encourage you to step your membership up and
                become a premium member today. A YAP DC premium membership
                affords you opportunities to network with other professionals in
                the diaspora and to participate in professional development
                programs that support you at any level of your career.
              </p>
              As a premium member, you will enjoy the following perks
              <ul>
                <li>
                  Exclusive access to our virtual platform (the YAP App) to swap
                  resources, job opportunities, advice, and ideas around
                  building social capital and career development
                </li>
                <li>
                  More than two dozen unique professional development events
                  designed specifically for premium members - dinner and
                  dialogue series, embassy events, fireside chat about virtual
                  currency and development, and more.
                </li>
                <li>
                  Up to a 30% discount on the Annual Georgetown Africa Business
                  Conference
                </li>
                <li>
                  Preferred seating and 10% discount on books at partnership
                  events with Politics and Prose Bookstore.
                </li>
                <li>
                  Monthly networking events to connect and engage with
                  like-minded professionals in the DC region and beyond.
                </li>
                <li>
                  A year-long enterprise membership at I/O SPACES, a loft-style
                  penthouse workspace in Silver Spring
                </li>
                <li>And more in the works!</li>
              </ul>
              <p />
              <a href="https://yapdc.mn.co">
                <button>
                  Sign up for premium membership through our YAP APP today!
                </button>
              </a>
            </div>
            <div className="yap-app-screenshot">
              <img src={yapAppImg} alt="Screen shot of mobile app" />
            </div>
          </MemberSection>
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

export default IndexPage
