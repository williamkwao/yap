import React from 'react'
import { Events } from '../../components'
import { parseEventsFromMarkdown } from '../../utils/utils'

const EventsPreview = ({ widgetsFor }) => {
  const events = widgetsFor('event').map((event, index) => {
    const name = event.getIn(['data', 'name'])
    const date = event.getIn(['data', 'date'])
    const url = event.getIn(['data', 'url'])
    const address = event.getIn(['data', 'address'])
    return { name, date, url, address }
  })
  return <Events eventsData={parseEventsFromMarkdown(events)} />
}

export default EventsPreview
