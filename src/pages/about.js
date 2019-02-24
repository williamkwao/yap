import React from 'react'
import { Layout } from '../components'
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
    }

    a {
      color: #000;
      :hover {
        color: #fcbc19;
      }
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
  }
`

const About = () => {
  return (
    <Layout>
      <AboutStyle>
        <section className="banner-section">
          <h1>About YAP</h1>
          <img className="banner-image" src={diasporaImg} alt="Yap Banner" />
        </section>
        <section className="text-section">
          <h1>WHO WE ARE</h1>
          <p>
            The Young African Professionals DC Network (YAP DC) is a 501(c)3
            organization based in Washington, D.C. Since its inception in 2002,
            YAP DC has grown into a respected network of more than 10,000 young
            African professionals across the DC Metro area and the diaspora. Our
            mission is to connect young African professionals for career
            development and opportunity creation.
          </p>
        </section>
        <section className="text-section">
          <h1>WHAT WE DO</h1>
          <ul>
            <li>
              <h3>We Provide Resources</h3>
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
                advance in the workplace, we can support you. Our curated
                workshops and networking events can help you launch your
                entrepreneurial aspirations, advance in your career, and remain
                relevant in the global market.
              </p>
            </li>
            <li>
              <h3>Foster Networking and Encourage Community Building</h3>
              <p>
                Our online networking platform can help you elevate your
                networking by connecting you to other ambitious, driven, young
                diaspora professionals like you! This space is for you to
                continue conversations after an event, meet people with similar
                interests, and build communities of support and collaboration.
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
      </AboutStyle>
    </Layout>
  )
}

export default About
