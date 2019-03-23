import React from 'react'
import { LandingSectionCard } from '../../components/'

const LandingCardsPreview = ({ widgetsFor }) => {
  const data = widgetsFor('cards').map(card => {
    return {
      header: card.getIn(['data', 'header']),
      image: card.getIn(['data', 'image']),
      description: card.getIn(['data', 'description']),
      link: card.getIn(['data', 'link']),
    }
  })
  return <LandingSectionCard data={data} />
}

export default LandingCardsPreview
