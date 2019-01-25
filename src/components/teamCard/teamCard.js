import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
const YapTeamCard = styled.div`
  display: inline-block;
  transition: 0.5s;
  position: relative;
  height: 320px;
  width: 100%;
  text-transform: uppercase;
  .sub-text {
    font-size: 0px;
    transition: 0.5s;
  }
  :hover {
    .sub-text {
      font-size: 18px;
    }
    .img-description {
      background-color: #fcbc19;
    }
  }
  img {
    height: 320px;
    width: 100%;
    object-fit: cover;
    margin-bottom: 0px;
  }

  .img-description {
    position: absolute;
    transition: 0.5s;
    bottom: 0px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    width: 100%;
    font-size: 36px;
    padding-left: 8px;
    padding-top: 8px;
    overflow: hidden;

    h2 {
      margin-bottom: 7px;
    }

    div {
      border-left: 2px solid #ffffff;
      padding-left: 10px;
      padding-bottom: 5px;
    }
  }

  @media (min-width: 992px) {
    height: 330px;
    .img-description {
      padding-left: 30px;
    }
    img {
      height: 330px;
    }
  }
`

const TeamCard = props => (
  <YapTeamCard>
    <img src={props.image} />
    <div className="img-description">
      <div>
        <h2>{props.firstName}</h2>
        <h2>{props.lastName}</h2>
        <h4 className="sub-text">{props.subText}</h4>
      </div>
    </div>
  </YapTeamCard>
)
TeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
  subText: PropTypes.string,
}
export default TeamCard
