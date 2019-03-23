import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import styled from 'styled-components'

const LandingSectionCardDiv = styled.div`
  text-align: center;
  display: grid;
  margin: auto;
  padding-top: 25px;
  @media (min-width: 992px) {
    grid-template-columns: 30% 38% 30%;
    grid-column-gap: 1%;
  }
`
const YapLandingSectionCard = styled.div`
  position: relative;
  transition: 0.5s;
  :hover {
    .img-description {
      background-color: #fcbc19;
    }
  }
  width: 100%;
  img {
    width: 100%;
    max-width: 100%;
    height: 222px;
    object-fit: cover;
    margin: 0px;
  }
  .img-description {
    position: absolute;
    transition: 0.5s;
    top: 40px;
    bottom: 40px;
    color: #fff;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-self: center;
    padding-left: 8px;
    padding-top: 8px;
    overflow: hidden;

    h3 {
      margin-bottom: 7px;
      font-size: 20px;
    }
    p {
      font-size: 14px;
      margin-bottom: 0px;
      line-height: normal;
    }
    div {
      align-self: center;
    }
  }
`

const LandingSectionCard = ({ data }) => (
  <LandingSectionCardDiv>
    {data
      ? data.map((card, index) => {
          return (
            <ScrollLink
              to={card.link.trim()}
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
              key={index}
            >
              <YapLandingSectionCard>
                <img src={card.image} alt="Quick menu" />
                <div className="img-description">
                  <div>
                    <h3> {card.header}</h3>
                    <p> {card.description}</p>
                  </div>
                </div>
              </YapLandingSectionCard>
            </ScrollLink>
          )
        })
      : null}
  </LandingSectionCardDiv>
)

export default LandingSectionCard
