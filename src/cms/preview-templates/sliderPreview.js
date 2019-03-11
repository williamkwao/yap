import React from 'react'
import { Slider } from '../../components'

const SliderPreview = ({ widgetsFor }) => {
  const images = widgetsFor('image').map(image => {
    return {
      image: image.getIn(['data', 'image']),
      description: image.getIn(['data', 'description']),
    }
  })
  return <Slider data={images} />
}

export default SliderPreview
