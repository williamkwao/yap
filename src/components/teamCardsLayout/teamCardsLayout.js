import React from 'react'
import TeamCard from '../teamCard/teamCard'
import styled from 'styled-components'
import RoseImage from '../../images/rose.jpg'
import MargaretImage from '../../images/margaret.jpg'
import AishaImage from '../../images/aisha.jpg'
import ELizabethImage from '../../images/elizabeth.jpg'
const TeamMembersData = [
  {
    image: MargaretImage,
    firstName: 'Margaret',
    lastName: 'Kamara',
    subText: 'President',
  },
  {
    image: AishaImage,
    firstName: 'Aisha',
    lastName: 'Saaka',
    subText: 'Secretary',
  },

  {
    image: ELizabethImage,
    firstName: 'Elizabeth',
    lastName: 'Ogunwo',
    subText: 'Treasurer',
  },
  {
    image: RoseImage,
    firstName: 'Rose',
    lastName: 'Essiem',
    subText: 'Executive Director/Board Member',
  },
]

const TeamCardsLayoutDiv = styled.div`
  max-width: 100%;
  margin: auto;
  margin-top: 10px;
  :hover {
    h1 {
      color: #fcbc19;
    }
  }
  h1 {
    transition: 0.5s;
  }
  .cards {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-column-gap: 3px;
    grid-row-gap: 10px;
  }
  @media (min-width: 992px) {
    .cards {
      grid-template-columns: 25% 25% 25% 25%;
      grid-column-gap: 0px;
      grid-row-gap: 0px;
    }
  }
`

const TeamCardsLayout = () => (
  <TeamCardsLayoutDiv>
    <h1>BOARD OF DIRECTORS</h1>
    <div className="cards">
      {TeamMembersData.map((member, index) => {
        return (
          <TeamCard
            key={index}
            image={member.image}
            firstName={member.firstName}
            lastName={member.lastName}
            subText={member.subText}
          />
        )
      })}
    </div>
  </TeamCardsLayoutDiv>
)

export default TeamCardsLayout
