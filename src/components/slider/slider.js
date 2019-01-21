import React from 'react'
import styled from 'styled-components'
import { default as SlickSlider } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import slide1 from '../../images/yap-meeting1.png'
import slide2 from '../../images/yap-meeting.jpg'

const YapSlider = styled.div`
  .slick-track {
    .slide-div {
      /* height: 400px !important; */

      img {
        width: 100%;
        object-fit: cover;
        height: 400px;
      }
    }
  }

  @media (min-width: 992px) {
    .slick-track {
      .slide-div {
        /* height: 400px !important; */

        img {
          height: 500px;
        }
      }
    }
  }
`
const Slider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
  }
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

export default Slider
