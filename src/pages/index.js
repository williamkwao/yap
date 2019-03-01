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
  p {
    padding-bottom: 20px;
  }
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
                The Young African Professionals DC Network (YAP DC) is a 501(c)3
                organization based in Washington, D.C. Since its inception in
                2002, YAP DC has grown into a respected network of more than
                10,000 young African professionals across the DC Metro area and
                the diaspora. Our mission is to address the professional needs
                of young Africans in the diaspora; support more Africans in
                positions of power and influence; and positively influence
                narratives about the continent.
              </p>
              <Link to="/about">
                <p>Learn More About YAP’s Offerings</p>
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
          <TeamCardsLayout />
        </YapSection>
        <YapSection>
          <h1 className="title center">OUR SPONSORS</h1>
          <Sponsors />
        </YapSection>
      </Layout>
    )
  }
}

export default IndexPage
