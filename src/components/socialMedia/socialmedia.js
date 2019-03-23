import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import SVGIcon from './SVGIcon'
import { YapSocialMediaIcons } from './socialMediaStyles'

const generateSocialMedia = links => {
  return (
    <YapSocialMediaIcons className="social-icons">
      <div className="logo-div">
        <SVGIcon name="twitter" width={30} fill="#000" link={links.twitter} />
        <SVGIcon name="facebook" width={30} fill="#000" link={links.facebook} />
        <SVGIcon
          name="instagram"
          width={30}
          fill="#000"
          link={links.instagram}
        />
        <SVGIcon name="linkedin" width={30} fill="#000" link={links.linkedin} />
      </div>
    </YapSocialMediaIcons>
  )
}
const SocialMediaIcons = props => {
  if (props.data) {
    return generateSocialMedia(props.data)
  }
  return (
    <StaticQuery
      query={graphql`
        query getSocialMediaLinks {
          file(name: { eq: "social-media-data" }) {
            childMarkdownRemark {
              frontmatter {
                twitter
                facebook
                instagram
                linkedin
              }
            }
          }
        }
      `}
      render={data => {
        const links = data.file.childMarkdownRemark.frontmatter
        return generateSocialMedia(links)
      }}
    />
  )
}
export default SocialMediaIcons
