import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { Header, Footer } from './'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          id="modal78"
          style={{
            maxWidth: '100%',
            width: '100%',
            padding: 0,
            margin: 0,
          }}
        >
          {children}
          <Footer />
        </div>
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
