import React, { Component } from 'react'
import styled from 'styled-components'
import { default as SlickSlider } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import slide1 from '../../images/yap-meeting1.png'
import slide2 from '../../images/yap-meeting.jpg'

const YapSlider = styled.div`
  .slick-dots {
    position: static;
  }
  .slick-track {
    .slide-div {
      img {
        width: 100%;
        max-width: 100%;
        object-fit: cover;
        height: 400px;
      }
    }
  }
  .slick-initialized .slick-slide {
    padding: 0;
  }

  @media (min-width: 992px) {
    .slick-track {
      .slide-div {
        img {
          height: 500px;
          margin: 0;
        }
      }
    }
  }
`
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
}
class Slider extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 0)
  }

  render() {
    return (
      <YapSlider>
        <SlickSlider {...settings}>
          <div className="slide-div">
            <img src={slide1} alt="slide" />
          </div>
          <div className="slide-div" alt="slide">
            <img src={slide2} />
          </div>
        </SlickSlider>
      </YapSlider>
    )
  }
}

export default Slider
