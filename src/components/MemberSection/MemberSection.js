import React, { Component } from 'react'
import styled from 'styled-components'
import yapAppImg from './yap-app.png'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}
const MemberSectionDiv = styled.section`
  display: grid;
  h2 {
    transition: 0.5s;
  }
  /* p {
    padding-bottom: 20px;
  } */
  button {
    :focus {
      border: none;
    }
    :hover {
      background-color: #fcbc19;
      box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.25);
    }
    font-size: 18px;
    background: #000;
    color: #fff;
    padding: 19px 52px;
    transition: 0.5s;
    border: none;
  }
  .yap-app-screenshot {
    display: none;
    img {
      width: 100%;
      max-width: 100%;
    }
  }
  @media (min-width: 992px) {
    grid-template-columns: 35% 65%;
    .yap-app-screenshot {
      display: block;
    }
  }
`
Modal.setAppElement('#___gatsby')

class MemberSection extends Component {
  state = {
    modalIsOpen: false,
  }
  openModal = this.openModal.bind(this)
  afterOpenModal = this.afterOpenModal.bind(this)
  closeModal = this.closeModal.bind(this)

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00'
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <div>
        <MemberSectionDiv>
          <div>
            <h2 className="title">Become a Member of our YAP APP</h2>
            <p>
              We are proud to announce our NEW professional networking app for
              our YAP DC Membership. With over 10,000 members to date, we are
              excited to provide an innovative platform to continue to connect
              our community for career development opportunities.
            </p>
            <button onClick={this.openModal}>GET THE APP</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
              <button onClick={this.closeModal}>close</button>
              <div>I am a modal</div>
              <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form>
            </Modal>
          </div>
          <div className="yap-app-screenshot">
            <img src={yapAppImg} alt="Screen shot of mobile app" />
          </div>
        </MemberSectionDiv>
      </div>
    )
  }
}

export default MemberSection
