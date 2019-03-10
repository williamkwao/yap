import React, { Component } from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { default as SlickSlider } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  pauseOnHover: true,
}
class Slider extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 0)
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query getSLiderImages {
            file(name: { eq: "slider" }) {
              childMarkdownRemark {
                frontmatter {
                  image {
                    image
                    description
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <YapSlider>
            <SlickSlider {...settings}>
              {data.file.childMarkdownRemark.frontmatter.image.map(
                (image, index) => {
                  return (
                    <div key={index} className="slide-div">
                      <img src={image.image} alt={image.description} />
                    </div>
                  )
                }
              )}
            </SlickSlider>
          </YapSlider>
        )}
      />
    )
  }
}

export default Slider
