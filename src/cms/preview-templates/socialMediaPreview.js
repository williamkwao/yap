import React from 'react'
import { SocialMediaIcons } from '../../components'

const SocialMediaPreview = ({ entry }) => {
  const data = {
    facebook: entry.getIn(['data', 'facebook']),
    instagram: entry.getIn(['data', 'instagram']),
    twitter: entry.getIn(['data', 'twitter']),
    linkedin: entry.getIn(['data', 'linkedin']),
  }
  return <SocialMediaIcons data={data} />
}

export default SocialMediaPreview
