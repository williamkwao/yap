import React from 'react'
import { TeamCardsLayout } from '../../components/'

const LeadershipPreview = ({ widgetsFor, entry }) => {
  const header = entry.getIn(['data', 'header'])
  const leaders = widgetsFor('leaders').map(card => {
    return {
      firstName: card.getIn(['data', 'firstName']),
      lastName: card.getIn(['data', 'lastName']),
      description: card.getIn(['data', 'description']),
      image: card.getIn(['data', 'image']),
      about: card.getIn(['data', 'about']),
    }
  })

  return <TeamCardsLayout data={{ header, leaders }} />
}

export default LeadershipPreview
