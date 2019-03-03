import React from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialMediaIcons } from '../'

const YapFooter = styled.footer`
  background-color: #fcbc19;
  margin-bottom: 0px;
  padding: 20px 15px;
  text-align: center;
  section {
    margin: 12px 0px;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  p {
    color: #fff;
    font-weight: bold;
    margin-bottom: 0px;
  }
  .fa-envelope {
    color: #fff;
  }

  .social-icons {
    .logo-div {
      svg {
        path {
          fill: #fff !important;
        }
        width: 26px !important;
        :hover path {
          fill: #fff !important;
        }
      }
    }
  }

  @media (min-width: 992px) {
    padding: 20px 35px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    section {
      margin: 1px 0px;
    }
  }
`
const Footer = () => {
  library.add(faEnvelope)
  return (
    <YapFooter>
      <section className="contact">
        <a href="mailto:info@yapdc.org">
          <p>
            <FontAwesomeIcon icon="envelope" /> info@yapdc.org
          </p>
        </a>
      </section>
      <section>
        <SocialMediaIcons />
      </section>
      <section className="copyright">
        <p>
          {new Date().getFullYear()} {String.fromCharCode(169)} YAP DC
        </p>
      </section>
    </YapFooter>
  )
}

export default Footer
