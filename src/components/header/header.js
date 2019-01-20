import PropTypes from 'prop-types'
import React, { Component } from 'react'
import logo from './yaplogo.png'
import toggleIcon from './toggleIcon.png'
import closeIcon from './close.png'
import {
  YapHeader,
  MobileNavDraw,
  NoStyleButton,
  openDrawerStyle,
} from './headerStyles'

const menuItems = [
  { text: 'ABOUT' },
  { text: 'UPCOMING EVENTS' },
  { text: 'MEMBERSHIP' },
  { text: 'LEADERSHIP' },
  { text: 'CONTACT' },
]
class Header extends Component {
  state = {
    showDrawer: false,
  }
  render() {
    const generateMenuItemsList = () => {
      return (
        <ul>
          {menuItems.map((menuItem, index) => (
            <li key={index}>{menuItem.text}</li>
          ))}
        </ul>
      )
    }
    const toggleNavDrawer = () => {
      this.setState({ showDrawer: !this.state.showDrawer })
    }
    return (
      <React.Fragment>
        <YapHeader>
          <div>
            <img id="logo" src={logo} alt="yap logo" />
          </div>
          {generateMenuItemsList()}
          <NoStyleButton onClick={toggleNavDrawer}>
            <img id="nav-toggle" src={toggleIcon} alt="mobile menu toggle" />
          </NoStyleButton>
        </YapHeader>

        <MobileNavDraw style={this.state.showDrawer ? openDrawerStyle : null}>
          <NoStyleButton onClick={toggleNavDrawer}>
            <img src={closeIcon} alt="close mobile draw button" />
          </NoStyleButton>
          {generateMenuItemsList()}
        </MobileNavDraw>
      </React.Fragment>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
