//import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import logo from './yaplogo.png'

const YapHeader = styled.div`
  background: transparent;
  margin-bottom: 1.45rem;
  display: flex;
  justify-content: space-between;

  h1 a {
    color: black;
    text-decoration: none;
  }
  #logo {
    width: 198px;
    margin-bottom: 0px;
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
  </YapHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
