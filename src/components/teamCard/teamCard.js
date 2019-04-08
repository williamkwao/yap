import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Modal from 'react-responsive-modal'
import Img from 'gatsby-image'

const YapTeamCard = styled.div`
  .gatsby-image-wrapper {
    height: 100%;
  }
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
const AboutMemberModal = props => {
  return (
    <Modal open={props.modalIsOpen} onClose={() => props.onClose()}>
      <h1>Hello</h1>
    </Modal>
  )
}

class TeamCard extends Component {
  state = {
    modalIsOpen: false,
    updated: false,
  }

  openModal = () => {
    this.setState({ updated: true, modalIsOpen: true })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false, updated: false })
  }
  render() {
    return (
      <>
        <YapTeamCard className="team-card" onClick={this.openModal}>
          {this.props.image && this.props.image.childImageSharp ? (
            <Img
              fluid={this.props.image.childImageSharp.fluid}
              alt={this.props.firstName}
              objectFit="contain"
            />
          ) : (
            <img src={this.props.image} alt={this.props.firstName} />
          )}
          <div className="img-description">
            <div>
              <h2>{this.props.firstName}</h2>
              <h2>{this.props.lastName}</h2>
              <h4 className="sub-text">{this.props.subText}</h4>
            </div>
          </div>
        </YapTeamCard>
        <Modal
          center={true}
          open={this.state.modalIsOpen}
          onClose={this.closeModal}
        >
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html: `
                .about-modal-content{
                   margin: 20px 40px;
                   color: #fff;
                }

                .about-modal-content img{
                    max-height: 150px;
                    object-fit: cover;
                 }
                 .about-modal-content p{
                    color: #fff;
                 }
                 .about-modal-content h2{
                    margin-bottom: 0.4rem;
                 }
                 .about-modal-content h2{
                  margin-bottom: 0.4rem;
                 }
                 .about-modal-content h2, .about-modal-content h4{
                   color: #fcbc19;
                 }
               
                .styles_modal__gNwvD {
                  background:  rgba(0, 0, 0, 0.85);
                  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.4);
                }

                .styles_modal__gNwvD svg {
                    fill: #fff;
                }
                .styles_overlay__CLSq-{
                    background: rgba(0, 0, 0, 0.25);
                }
           }`,
            }}
          />
          <div className="about-modal-content">
            <h2>{`${this.props.firstName} ${this.props.lastName}`}</h2>
            <h4>{this.props.subText}</h4>
            <p>{this.props.about}</p>
          </div>
        </Modal>
      </>
    )
  }
}

TeamCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
  subText: PropTypes.string,
}
export default TeamCard
