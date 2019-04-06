import React, { Component } from 'react'
import styled from 'styled-components'
import Modal from 'react-responsive-modal'
import { convertMarkdownToHtml } from '../../utils/utils'

const buttonStyle = {
  textAlign: 'center',
  background: `#fcbc19`,
  color: '#fff',
  padding: '19px 52px',
  border: 'none',
}
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
  return document.querySelector('body')
}
class MemberSection extends Component {
  state = {
    modalIsOpen: false,
  }
  openModal = this.openModal.bind(this)
  closeModal = this.closeModal.bind(this)

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }
  membership
  render() {
    const data = this.props.data
    const modalContent = convertMarkdownToHtml(data.popup.content)
    return (
      <div
        className="membership"
        ref={inst => {
          this.membership = inst
        }}
      >
        <MemberSectionDiv className="members-section">
          <div>
            <h2 className="title">{data.header}</h2>
            <p>{data.sectionText}</p>
            <a href={data.appButton.url}>
              <button>{data.appButton.text}</button>
            </a>
            <button onClick={this.openModal}>{data.modalButtonText}</button>
            <Modal
              open={this.state.modalIsOpen}
              onClose={this.closeModal}
              showCloseIcon={false}
              container={document.getElementsByClassName('membership')[0]}
            >
              <div style={{ textAlign: 'right' }}>
                <button
                  style={{
                    color: '#f2f2f2',
                    backgroundColor: 'transparent',
                    border: 'none',
                  }}
                  onClick={this.closeModal}
                >
                  X
                </button>
              </div>

              <div
                className="markdown"
                style={{
                  color: '#000 !important',
                  '& li': {
                    color: '#000',
                  },
                }}
                dangerouslySetInnerHTML={{
                  __html: modalContent,
                }}
              />
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: `
                   .markdown { color: #f2f2f2 !important;}
                   .markdown p, .markdown li { color: #f2f2f2 !important;}
                   .markdown p { margin-bottom: 1.45rem;} 
                   .markdown li {
                     margin-bottom: calc(1.45rem / 2);
                     
                   }
                   .markdown ul {margin-left: 1.45rem;}
                   .styles_modal__gNwvD svg {
                    fill: #fff;
                   }
                   .styles_modal__gNwvD {
                     background:  rgba(0, 0, 0, 0.85);
                     box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.4);
                   }`,
                }}
              />

              <a href={data.popup.buttonUrl}>
                <button style={{ ...buttonStyle, width: '100%' }}>
                  {data.popup.actionButtonText}
                </button>
              </a>
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
