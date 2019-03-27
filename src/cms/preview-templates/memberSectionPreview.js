import React from 'react'
import { MemberSection } from '../../components'
import '../../components/layout.css'

const MemberSectionPreview = ({ entry, widgetsFor }) => {
  const header = entry.getIn(['data', 'header'])
  const sectionText = entry.getIn(['data', 'sectionText'])
  const sectionImageData = widgetsFor('sectionImage')
  const sectionImage = {
    description: sectionImageData.getIn(['data', 'description']),
    image: sectionImageData.getIn(['data', 'image']),
  }
  const appButtonData = widgetsFor('appButton')
  const appButton = {
    text: appButtonData.getIn(['data', 'text']),
    url: appButtonData.getIn(['data', 'url']),
  }
  const modalButtonText = entry.getIn(['data', 'modalButtonText'])

  const popupData = widgetsFor('popup')
  const popup = {
    actionButtonText: popupData.getIn(['data', 'actionButtonText']),
    buttonUrl: popupData.getIn(['data', 'buttonUrl']),
    content: popupData.getIn(['data', 'content']),
  }
  console.log('section image', sectionImage, appButton, popup)
  const data = {
    header,
    sectionText,
    sectionImage,
    appButton,
    modalButtonText,
    popup,
  }
  return (
    <div>
      <MemberSection data={data} />
    </div>
  )
}

export default MemberSectionPreview
