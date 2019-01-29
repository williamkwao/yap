import React from 'react'
import styled from 'styled-components'
import leftCardImage from './leftCardImage.png'
import centerCardImage from './centerCardImage.png'
import rightCardImage from './rightCardImage.png'
const TeamMembersData = [
  {
    image: leftCardImage,
    title: 'MEET THE TEAM',
    description:
      'Meet the crew, and get to know what we do to make the DC chapter of YAP successful',
  },
  {
    image: centerCardImage,
    title: 'SPEAKER’S CORNER',
    description:
      'See some of the distinguished speakers that have presented at our events',
  },
  {
    image: rightCardImage,
    title: 'MEMBERSHIP',
    description:
      'Thinking of signing up? See what comes with membership, and get access to the YAP app',
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
      box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.25);
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
    {TeamMembersData.map((member, index) => {
      return (
        <YapLandingSectionCard key={index}>
          <img src={member.image} alt="Quick menu" />
          <div className="img-description">
            <div>
              <h3> {member.title}</h3>
              <p> {member.description}</p>
            </div>
          </div>
        </YapLandingSectionCard>
      )
    })}
  </LandingSectionCardDiv>
)

export default LandingSectionCard
