import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import styled from 'styled-components'
import leftCardImage from './leftCardImage.png'
import centerCardImage from './centerCardImage.png'
import rightCardImage from './rightCardImage.png'
const CardData = [
  {
    image: leftCardImage,
    title: 'About YAP DC',
    description:
      'Meet the crew, and get to know what we do to make the DC chapter of YAP successful',
    link: 'leadership',
  },
  {
    image: centerCardImage,
    title: 'UPCOMING EVENTS',
    description:
      'YAP DC provides opportunities to engage with and learn from influential people from the DC area and the African continent. We do that through our live programming, which includes everything from networking happy hours to town hall discussions, panel events, author readings, business conferences, international and economic development forums and more!',
    link: 'events',
  },
  {
    image: rightCardImage,
    title: 'MEMBERSHIP',
    description:
      'Thinking of signing up? See what comes with membership, and get access to the YAP app',
    link: 'membership',
  },
]

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

const LandingSectionCard = () => (
  <LandingSectionCardDiv>
    {CardData.map((card, index) => {
      return (
        <ScrollLink
          to={card.link}
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
                <h3> {card.title}</h3>
                <p> {card.description}</p>
              </div>
            </div>
          </YapLandingSectionCard>
        </ScrollLink>
      )
    })}
  </LandingSectionCardDiv>
)

export default LandingSectionCard
