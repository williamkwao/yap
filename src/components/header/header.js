//import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import logo from './yaplogo.png'
import toggleIcon from './toggleIcon.png'

const YapHeader = styled.nav`
  background: transparent;
  margin-bottom: 1.45rem;
  display: flex;
  justify-content: space-between;
  padding: 26px 8px;

  h1 a {
    color: black;
    text-decoration: none;
  }
  #logo {
    width: 140px;
    margin-bottom: 0px;
  }
  li,
  ul {
    display: none;
    vertical-align: middle;
  }

  #nav-toggle {
    width: 32px;
    margin: auto 10px;
  }

  /* Dextop Styles */
  @media (min-width: 992px) {
    #logo {
      width: 198px;
    }
    #nav-toggle {
      display: none;
    }
    li,
    ul {
      display: inline-block;
      vertical-align: middle;
    }
    ul {
      margin: auto;
      margin-right: 10px;
    }
    li {
      padding: 21px;
    }
  }
`
const Header = ({ siteTitle }) => (
  <YapHeader>
    <div>
      <img id="logo" src={logo} alt="yap logo" />
    </div>
    <ul>
      <li> MEET THE TEAM</li>
      <li> SPEAKER'S CORNER</li>
      <li> UPCOMING EVENT</li>
    </ul>
    <img id="nav-toggle" src={toggleIcon} alt="mobile menu toggle" />
  </YapHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
