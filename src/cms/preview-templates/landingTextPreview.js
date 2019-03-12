import React from 'react'
import { YapMission } from '../../pages/index'

const LandingTextPreview = ({ entry }) => {
  console.log(entry.getIn(['data', 'Title']))
  return (
    <YapMission>
      <h1>{entry.getIn(['data', 'Title'])} </h1>
      <p>{entry.getIn(['data', 'text'])}</p>
      <a>
        <p>
          <p>{entry.getIn(['data', 'aboutLink'])}</p>
        </p>
      </a>
    </YapMission>
  )
}

export default LandingTextPreview
