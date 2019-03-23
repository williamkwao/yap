import React from 'react'
import { Sponsors } from '../../components'

const SponsorsPreview = ({ widgetsFor, entry }) => {
  const header = entry.getIn(['data', 'header'])
  const sponsor = widgetsFor('sponsor').map(sponsor => {
    return {
      name: sponsor.getIn(['data', 'name']),
      image: sponsor.getIn(['data', 'image']),
      url: sponsor.getIn(['data', 'url']),
    }
  })
  return <Sponsors data={{ header, sponsor }} />
}

export default SponsorsPreview
