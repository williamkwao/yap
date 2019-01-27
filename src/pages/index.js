import React from 'react'
import styled from 'styled-components'
import {
  TeamCardsLayout,
  Layout,
  Slider,
  SEO,
  Events,
  SocialMediaIcons,
} from '../components'
import yapAppImg from '../images/yap-app.png'

const LandingSection = styled.section`
  overflow-x: hidden;
  padding-right: 5px;
  padding-left: 5px;
  :hover {
    h1 {
      color: #fcbc19;
    }
  }
  /* Dextop Styles */
  @media (min-width: 992px) {
    padding-right: 35px;
    padding-left: 35px;
    display: grid;
    grid-template-columns: 32% 68%;
  }
`
const YapMission = styled.div`
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
`
const EventsSection = styled.section`
  min-height: 720px;
  padding: 60px 15px;
  :hover {
    h1 {
      color: #fcbc19;
      transition: 0.5s;
    }
  }
  h1 {
    text-align: right;
    text-transform: uppercase;
  }

  @media (min-width: 992px) {
    min-height: 800px;
    padding: 80px 35px;

    h1 {
      margin-bottom: 60px;
    }
  }
`

const MemberSection = styled.section`
  padding: 60px 15px;
  display: grid;
  font-family: georgia, serif;
  :hover {
    h2 {
      color: #fcbc19;
    }
  }
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
    padding: 80px 35px;
    grid-template-columns: 35% 65%;
    .yap-app-screenshot {
      display: block;
    }
  }
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`YAP`, 'Young African Professionals']} />
    <LandingSection>
      <YapMission>
        <h1>What We Do</h1>
        <p>
          We provide connections to invauable resources through our network,
          facilitate professional development in workshops.
        </p>
        <a href="/">
          <p>Learn More About YAP’s Offerings</p>
        </a>
        <SocialMediaIcons />
      </YapMission>
      <Slider />
    </LandingSection>
    <EventsSection>
      <h1>Upcoming Events</h1>
      <Events />
    </EventsSection>
    <MemberSection>
      <div>
        <h2>Become a Member of our YAP APP</h2>
        <p>
          We are proud to announce our NEW professional networking app for our
          YAP DC Membership. With over 10,000 members to date, we are excited to
          provide an innovative platform to continue to connect our community
          for career development opportunities.
        </p>
        <a href="https://yapdc.mn.co">
          <button>GET THE APP</button>
        </a>
      </div>
      <div className="yap-app-screenshot">
        <img src={yapAppImg} alt="Screen shot of mobile app" />
      </div>
    </MemberSection>
    <section>
      <TeamCardsLayout />
    </section>
  </Layout>
)

export default IndexPage
