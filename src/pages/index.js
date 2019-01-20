import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Slider from '../components/slider/slider'

const LandingSection = styled.section`
  /* Dextop Styles */
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 30% 70%;
  }
`
const YapMission = styled.div`
  h1 {
    color: #fcbc19;
  }

  a {
    color: #000;
  }
  a:hover {
    color: #fcbc19;
  }

  @media (min-width: 992px) {
    padding-right: 20px;
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
      </YapMission>
      <Slider />
    </LandingSection>
  </Layout>
)

export default IndexPage
