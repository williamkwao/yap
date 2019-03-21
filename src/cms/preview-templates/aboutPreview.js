import React from 'react'
import { AboutTemplate } from '../../pages/about'

const AboutPreview = ({ entry }) => {
  const coverImage = entry.getIn(['data', 'coverImage'])
  const content1 = entry.getIn(['data', 'content1'])
  const content2 = entry.getIn(['data', 'content2'])
  console.log('message', content1, content2)
  return (
    <AboutTemplate coverImage={coverImage} html1={content1} html2={content2} />
  )
}

export default AboutPreview
