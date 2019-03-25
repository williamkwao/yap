import React from 'react'
import { Header } from '../../components'

const HeaderPreview = ({ entry, widgetsFor }) => {
  const logo = entry.getIn(['data', 'logo'])
  const preview = true
  const items = widgetsFor('items').map(item => {
    return {
      pageLink: item.getIn(['data', 'pageLink']),
      text: item.getIn(['data', 'text']),
      scrollLink: item.getIn(['data', 'scrollLink']),
      externalLink: item.getIn(['data', 'externalLink']),
    }
  })
  return <Header data={{ logo, items, preview }} />
}

export default HeaderPreview
