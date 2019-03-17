import React from 'react'
import { default as SlickSlider } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'

const SlideStyle = styled.div`
  .image-container {
    min-height: 100%;
  }

  .slick-track {
    display: flex;

    .slick-slide {
      align-self: center;
      height: 100%;
      padding: 10px 20px;
    }
  }
  .slick-arrow {
    color: #000;
  }

  .slick-prev:before,
  .slick-next:before {
    color: #000;
  }
`

var settings = {
  autoplay: true,
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  arrows: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
}
const Sponsors = ({ data }) => {
  const sponsors = data.sponsor
  return (
    <SlideStyle>
      <SlickSlider {...settings}>
        {sponsors.map((sponsor, index) => (
          <img key={index} src={sponsor.image} alt={sponsor.name} />
        ))}
      </SlickSlider>
    </SlideStyle>
  )
}

export default Sponsors
