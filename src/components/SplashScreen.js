import React from 'react'
import styled from 'styled-components'
import YapLogoSVG from '../images/yapdc-logo.svg'

const SplashStyle = styled.div`
  height: 100%;
  min-height: 100%;
  transition: 0.5s;
  width: 100%;
  min-width: 100%;
  background-color: #fcbc19;
  position: fixed;
  display: flex;
  justify-content: center;
  align-self: center;

  div {
    align-self: center;
  }
`

const SplashScreen = () => {
  return (
    <SplashStyle>
      <div>
        <img src={YapLogoSVG} alt="splash screen" />
      </div>
    </SplashStyle>
  )
}

export default SplashScreen
