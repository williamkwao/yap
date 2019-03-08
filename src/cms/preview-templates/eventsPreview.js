import React from 'react'
import PropTypes from 'prop-types'
import { Events } from '../../components'
import CMS from 'netlify-cms'

import React from 'react'

const EventsPreview = () => {
  return (
    <div>
      <h1>Test</h1>
    </div>
  )
}
CMS.registerPreviewTemplate('events', AuthorsPreview)
export default EventsPreview
