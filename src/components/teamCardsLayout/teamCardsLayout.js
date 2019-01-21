import React from 'react'
import TeamCard from '../teamCard/teamCard'
import styled from 'styled-components'
import RoseImage from '../../images/rose.png'
import EmileImage from '../../images/emile.png'
const TeamMembersData = [
  {
    image: RoseImage,
    firstName: 'Rose',
    lastName: 'Essiem',
    subText: 'President',
  },
  {
    image: EmileImage,
    firstName: 'Emile',
    lastName: 'Carson',
    subText: 'President',
  },
  {
    image: RoseImage,
    firstName: 'Rose',
    lastName: 'Essiem',
    subText: 'President',
  },
  {
    image: RoseImage,
    firstName: 'Rose',
    lastName: 'Essiem',
    subText: 'President',
  },
  {
    image: RoseImage,
    firstName: 'Rose',
    lastName: 'Essiem',
    subText: 'President',
  },
  {
    image: RoseImage,
    firstName: 'Rose',
    lastName: 'Essiem',
    subText: 'President',
  },
  {
    image: RoseImage,
    firstName: 'Rose',
    lastName: 'Essiem',
    subText: 'President',
  },
  {
    image: RoseImage,
    firstName: 'Rose',
    lastName: 'Essiem',
    subText: 'President',
  },
]

const TeamCardsLayoutDiv = styled.div`
  max-width: 100%;
  margin: auto;
  margin-top: 10px;

  @media (min-width: 992px) {
    padding: 35px;
    .cards {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
    }
  }
`

const TeamCardsLayout = () => (
  <TeamCardsLayoutDiv>
    <h1>MEET THE TEAM</h1>
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
