import React from 'react'
import TeamCard from '../teamCard/teamCard'
import styled from 'styled-components'

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

const TeamCardsLayout = props => {
  const data = props.data ? props.data : []
  return (
    <TeamCardsLayoutDiv>
      <h1>BOARD OF DIRECTORS</h1>
      <div className="cards">
        {data.map((member, index) => {
          return (
            <TeamCard
              key={index}
              image={member.image}
              firstName={member.firstName}
              lastName={member.lastName}
              subText={member.description}
            />
          )
        })}
      </div>
    </TeamCardsLayoutDiv>
  )
}
export default TeamCardsLayout
