import PropTypes from 'prop-types'
import React, { Component } from 'react'
import logo from '../../images/yap-logo-full.png'
import toggleIcon from './toggleIcon.png'
import closeIcon from './close.png'
import SocialMediaIcons from '../socialMedia/socialmedia'
import { Link as ScrollLink } from 'react-scroll'
import { Link } from 'gatsby'
import {
  YapHeader,
  MobileNavDraw,
  NoStyleButton,
  openDrawerStyle,
} from './headerStyles'

const menuItems = [
  { text: 'ABOUT YAP', link: '/about' },
  { text: 'UPCOMING EVENTS', scrollLink: 'events' },
  { text: 'MEMBERSHIP', scrollLink: 'membership' },
  { text: 'LEADERSHIP', scrollLink: 'leadership' },
]
class Header extends Component {
  state = {
    showDrawer: false,
  }

  componentWillMount() {
    if (typeof document !== 'undefined') {
      document.addEventListener('mousedown', this.handleClick, false)
    }
  }
  componentWillUnmount() {
    if (typeof document !== 'undefined') {
      document.removeEventListener('mousedown', this.handleClick, false)
    }
  }

  handleClick = e => {
    if (this.node && !this.node.contains(e.target) && this.state.showDrawer) {
      this.setState({ showDrawer: false })
    }
  }
  render() {
    const generateMenuItemsList = () => {
      let renderedMenuItems = []
      if (typeof window !== `undefined` && window.location.pathname != '/') {
        renderedMenuItems = menuItems.filter(items => !items.scrollLink)

        renderedMenuItems = [{ text: 'HOME', link: '/' }].concat(
          renderedMenuItems
        )
      } else {
        renderedMenuItems = menuItems
      }
      return (
        <ul>
          {renderedMenuItems.map((menuItem, index) =>
            menuItem.scrollLink ? (
              <ScrollLink
                to={menuItem.scrollLink}
                spy={true}
                smooth={true}
                offset={20}
                duration={500}
                key={index}
              >
                <li>{menuItem.text}</li>
              </ScrollLink>
            ) : (
              <Link to={menuItem.link ? menuItem.link : '/'} key={index}>
                <li>{menuItem.text}</li>
              </Link>
            )
          )}
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
            <Link to="/">
              <img id="logo" src={logo} alt="yap logo" />
            </Link>
          </div>
          {generateMenuItemsList()}
          <NoStyleButton onClick={toggleNavDrawer}>
            <img id="nav-toggle" src={toggleIcon} alt="mobile menu toggle" />
          </NoStyleButton>
        </YapHeader>

        <MobileNavDraw
          ref={node => (this.node = node)}
          style={this.state.showDrawer ? openDrawerStyle : null}
        >
          <NoStyleButton onClick={toggleNavDrawer}>
            <img src={closeIcon} alt="close mobile draw button" />
          </NoStyleButton>
          {generateMenuItemsList()}
          <SocialMediaIcons />
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
