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
    <h1>LEADERSHIP</h1>
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
