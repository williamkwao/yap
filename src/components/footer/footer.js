import React from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialMediaIcons } from '../'
import SubscribeSection from '../subscribe/subscribeSection'

const YapFooter = styled.footer`
  background-color: #fcbc19;
  margin-bottom: 0px;
  /* padding: 20px 15px; */
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

  .subscribe {
    h3 {
      color: #f2f2f2;
    }

    form {
      input {
        display: block;
        margin: auto;
        margin: 10px auto;
      }
    }
  }

  @media (min-width: 992px) {
    .footer-bottom {
      /* padding: 20px 35px; */
      padding: 20px 15px;

      display: grid;
      grid-template-columns: repeat(3, 1fr);
      section {
        margin: 1px 0px;
      }
    }
    .subscribe {
      width: 100%;
      padding-top: 20px;
      form {
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        margin: none;
        input {
          display: inline-block;
          margin: 10px 20px;
          width: 230px;
          background-color: transparent;
          color: #fff;
          border-style: solid;
        }

        button {
          background-color: transparent;
          color: #fff;
          border: none;
          box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
`
const Footer = () => {
  library.add(faEnvelope)
  return (
    <YapFooter>
      <div className="footer-bottom">
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
      </div>
    </YapFooter>
  )
}

export default Footer
