import React from 'react'
import CMS from 'netlify-cms'
import { StyleSheetManager } from 'styled-components'
import SliderPreview from './preview-templates/sliderPreview'
import EventsPreview from './preview-templates/eventsPreview'
import LandingTextPreview from './preview-templates/landingTextPreview'
import LandingCardsPreview from './preview-templates/landingCardsPreview'
import LeadershipPreview from './preview-templates/leadershipPreview'
import SponsorsPreview from './preview-templates/sponsorsPreview'
import AboutPreview from './preview-templates/aboutPreview'
import SocialMediaPreview from './preview-templates/socialMediaPreview'
import HeaderPreview from './preview-templates/headerPreview'
import MemberSectionPreview from './preview-templates/memberSectionPreview'
import { LayoutStyle } from '../components/layoutStyles'
class CSSInjector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      iframeRef: '',
    }
  }

  componentDidMount() {
    const iframe = document.getElementsByTagName('iframe')[0]
    const iframeHeadElem = iframe.contentDocument.head
    this.setState({ iframeRef: iframeHeadElem })
  }

  render() {
    return (
      <div>
        {this.state.iframeRef && (
          <StyleSheetManager target={this.state.iframeRef}>
            <LayoutStyle>{this.props.children}</LayoutStyle>
          </StyleSheetManager>
        )}
      </div>
    )
  }
}

CMS.registerPreviewTemplate('events', props => (
  <CSSInjector>
    <EventsPreview {...props} />
  </CSSInjector>
))

CMS.registerPreviewTemplate('slider', props => (
  <CSSInjector>
    <SliderPreview {...props} />
  </CSSInjector>
))

CMS.registerPreviewTemplate('landingText', props => (
  <CSSInjector>
    <LandingTextPreview {...props} />
  </CSSInjector>
))

CMS.registerPreviewTemplate('landingCards', props => (
  <CSSInjector>
    <LandingCardsPreview {...props} />
  </CSSInjector>
))

CMS.registerPreviewTemplate('leadershp', props => (
  <CSSInjector>
    <LeadershipPreview {...props} />
  </CSSInjector>
))

CMS.registerPreviewTemplate('sponsors', props => (
  <CSSInjector>
    <SponsorsPreview {...props} />
  </CSSInjector>
))

CMS.registerPreviewTemplate('about', props => (
  <CSSInjector>
    <AboutPreview {...props} />
  </CSSInjector>
))

CMS.registerPreviewTemplate('socialMedia', props => (
  <CSSInjector>
    <SocialMediaPreview {...props} />
  </CSSInjector>
))

CMS.registerPreviewTemplate('header', props => (
  <CSSInjector>
    <HeaderPreview {...props} />
  </CSSInjector>
))
CMS.registerPreviewTemplate('membership', props => (
  <CSSInjector>
    <MemberSectionPreview {...props} />
  </CSSInjector>
))
