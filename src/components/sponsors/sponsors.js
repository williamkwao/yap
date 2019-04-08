import React from 'react'
import Img from 'gatsby-image'
import { default as SlickSlider } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'

const SlideStyle = styled.div`
  a {
    :focus {
      border: none;
    }
  }
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
  const header = data.header
  const sponsors = data.sponsor
  const GenerateImage = props => {
    const sponsor = props.sponsor
    return sponsor.image && sponsor.image.childImageSharp ? (
      <Img
        fluid={sponsor.image.childImageSharp.fluid}
        alt={sponsor.name}
        objectFit="contain"
      />
    ) : (
      <img src={sponsor.image} alt={sponsor.name} />
    )
  }
  return (
    <SlideStyle>
      <h1 className="title center">{header}</h1>
      <SlickSlider {...settings}>
        {sponsors.map((sponsor, index) => {
          return sponsor.url ? (
            <a
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GenerateImage key={index} sponsor={sponsor} />
            </a>
          ) : (
            <GenerateImage key={index} sponsor={sponsor} />
          )
        })}
      </SlickSlider>
    </SlideStyle>
  )
}

export default Sponsors
