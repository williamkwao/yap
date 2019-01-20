import React from 'react'
import styled from 'styled-components'
import roseImage from '../../images/rose.png'
const YapTeamCard = styled.div`
  transition: 0.5s;
  position: relative;
  height: 330px;
  width: 274px;
  .position {
    font-size: 0px;
    transition: 0.5s;
  }
  :hover {
    .position {
      font-size: 18px;
    }
    .img-description {
      background-color: #fcbc19;
      /* margin-top: -175px; */
    }
  }
  img {
    height: 330px;
    width: 274px;
    object-fit: cover;
    margin-bottom: 0px;
  }

  .img-description {
    position: absolute;
    transition: 0.5s;
    bottom: 0px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    width: 274px;
    font-size: 36px;
    padding-left: 30px;
    padding-top: 8px;
    overflow: hidden;

    h2 {
      margin-bottom: 10px;
    }

    div {
      border-left: 2px solid #ffffff;
      padding-left: 10px;
      padding-bottom: 5px;
    }
  }
`

const TeamCard = () => (
  <YapTeamCard>
    <img src={roseImage} />
    <div className="img-description">
      <div>
        <h2>ROSE</h2>
        <h2>ESSIEM</h2>
        <h4 className="position">PRESIDENT</h4>
      </div>
    </div>
  </YapTeamCard>
)

export default TeamCard
