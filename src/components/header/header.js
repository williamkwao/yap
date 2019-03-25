import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
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
    const generateMenuItemsList = data => {
      let renderedMenuItems = []
      if (
        typeof window !== `undefined` &&
        (window.location.pathname !== '/' && !data.preview)
      ) {
        renderedMenuItems = data.items.filter(
          items => items.scrollLink == 'N/A'
        )

        renderedMenuItems = [{ text: 'HOME', pagelink: '/' }].concat(
          renderedMenuItems
        )
      } else {
        renderedMenuItems = data.items
      }

      return (
        <ul>
          {renderedMenuItems.map((menuItem, index) => {
            if (menuItem.pageLink != 'N/A') {
              return (
                <Link
                  to={menuItem.pageLink ? `/${menuItem.pageLink}` : '/'}
                  key={index}
                >
                  <li
                    onClick={e => {
                      this.setState({ showDrawer: false })
                    }}
                  >
                    {menuItem.text}
                  </li>
                </Link>
              )
            } else if (menuItem.scrollLink && menuItem.scrollLink != 'N/A') {
              return (
                <ScrollLink
                  to={menuItem.scrollLink}
                  spy={true}
                  smooth={true}
                  offset={20}
                  duration={500}
                  key={index}
                >
                  <li
                    onClick={e => {
                      this.setState({ showDrawer: false })
                    }}
                  >
                    {menuItem.text}
                  </li>
                </ScrollLink>
              )
            } else if (
              menuItem.externalLink &&
              menuItem.externalLink != 'N/A'
            ) {
              return (
                <a href={menuItem.externalLink}>
                  <li>{menuItem.text}</li>{' '}
                </a>
              )
            }
          })}
        </ul>
      )
    }
    const toggleNavDrawer = () => {
      this.setState({ showDrawer: !this.state.showDrawer })
    }

    const navFragment = data => {
      return (
        <React.Fragment>
          <YapHeader>
            <div>
              <Link to="/">
                <img id="logo" src={data.logo} alt="yap logo" />
              </Link>
            </div>
            {generateMenuItemsList(data)}
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
            {generateMenuItemsList(data)}
            {!data.preview ? <SocialMediaIcons /> : null}
          </MobileNavDraw>
        </React.Fragment>
      )
    }
    if (this.props.data) {
      return navFragment(this.props.data)
    }
    return (
      <StaticQuery
        query={graphql`
          query getHeaderData {
            file(name: { eq: "header-content" }) {
              childMarkdownRemark {
                frontmatter {
                  logo
                  items {
                    pageLink
                    scrollLink
                    text
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const fetchedData = data.file.childMarkdownRemark.frontmatter
          return navFragment(fetchedData)
        }}
      />
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
