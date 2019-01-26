import React from 'react'
import SVGIcon from './SVGIcon'
import { YapSocialMediaIcons } from './socialMediaStyles'

const SocialMediaIcons = props => (
  <YapSocialMediaIcons>
    <div className="logo-div">
      <SVGIcon
        name="twitter"
        width={30}
        fill="#000"
        link="https://twitter.com/yapdc"
      />
      <SVGIcon
        name="facebook"
        width={30}
        fill="#000"
        link="https://www.facebook.com/YAPDCNetwork/"
      />
      <SVGIcon
        name="instagram"
        width={30}
        fill="#000"
        link="https://www.instagram.com/yap.dc/"
      />
      <SVGIcon
        name="linkedin"
        width={30}
        fill="#000"
        link="https://www.linkedin.com/in/yap-dc-652259148/"
      />
    </div>
  </YapSocialMediaIcons>
)
export default SocialMediaIcons
