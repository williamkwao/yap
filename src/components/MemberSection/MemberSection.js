import React, { Component } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { convertMarkdownToHtml } from '../../utils/utils'
const customStyles = {
  content: {
    color: '#fff',
    background: 'rgba(0, 0, 0, 0.85)',
  },
}

const ModalButton = styled.button`
  color: #fff;
  font-size: 18px;
  padding: 0;
  border: none;
  background: none;
`
const MemberSectionDiv = styled.section`
  display: grid;
  h2 {
    transition: 0.5s;
  }
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
  button {
    margin: 10px 10px 0px 0px;
  }
`
function getParent() {
  return document.querySelector('#modal78')
}
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
    //this.subtitle.style.color = '#f00'
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    const data = this.props.data
    const modalContent = convertMarkdownToHtml(data.popup.content)
    return (
      <div>
        <MemberSectionDiv>
          <div>
            <h2 className="title">{data.header}</h2>
            <p>{data.sectionText}</p>
            <a href={data.appButton.url}>
              <button>{data.appButton.text}</button>
            </a>
            <button onClick={this.openModal}>{data.modalButtonText}</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              parentSelector={getParent}
              contentLabel="Example Modal"
              ariaHideApp={false}
            >
              <div style={{ textAlign: 'right' }}>
                <ModalButton onClick={this.closeModal}>X</ModalButton>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: convertMarkdownToHtml(modalContent),
                }}
              />
              <div
                style={{
                  textAlign: 'center',
                  background: `#fcbc19`,
                  color: '#fff',
                  padding: '19px 52px',
                }}
              >
                <a href={data.popup.buttonUrl}>
                  <ModalButton>{data.popup.actionButtonText}</ModalButton>
                </a>
              </div>
            </Modal>
          </div>
          <div className="yap-app-screenshot">
            <img
              src={data.sectionImage.image}
              alt={data.sectionImage.description}
            />
          </div>
        </MemberSectionDiv>
      </div>
    )
  }
}

export default MemberSection
