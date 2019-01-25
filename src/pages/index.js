import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { TeamCardsLayout, Layout, Slider, SEO, Events } from '../components'
import SVGIcon from '../components/SVGIcon'

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
const SocialMediaIcons = styled.div`
  .logo-div {
    svg {
      :hover path {
        fill: #fcbc19;
      }
    }
    svg {
      margin: 9px;
      padding: 5px;
      width: 32px;
    }
  }
`
const EventsSection = styled.section`
  min-height: 800px;
  padding: 15px;
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
    padding: 80px 35px;

    h1 {
      margin-bottom: 60px;
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
        <a href="#">
          <p>Learn More About YAP’s Offerings</p>
        </a>
        <SocialMediaIcons>
          <div className="logo-div">
            <SVGIcon
              name="twitter"
              width={30}
              fill="#000"
              link="https://twitter.com/yapdc"
            />
            <SVGIcon
              name="facebook"
              width={30}
              fill="#000"
              link="https://www.facebook.com/YAPDCNetwork/"
            />
            <SVGIcon
              name="instagram"
              width={30}
              fill="#000"
              link="https://www.instagram.com/yap.dc/"
            />
            <SVGIcon
              name="linkedin"
              width={30}
              fill="#000"
              link="https://www.linkedin.com/in/yap-dc-652259148/"
            />
          </div>
        </SocialMediaIcons>
      </YapMission>
      <Slider />
    </LandingSection>
    <EventsSection>
      <h1>Upcoming Events</h1>
      <Events />
    </EventsSection>
    <section>
      <TeamCardsLayout />
    </section>
  </Layout>
)

export default IndexPage
