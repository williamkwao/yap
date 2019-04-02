import React, { Component } from 'react'
import Modal from 'react-responsive-modal'
import SubscribeSection from './subscribeSection'
class SubscribeModal extends Component {
  state = {
    modalIsOpen: true,
  }
  openModal = this.openModal.bind(this)
  closeModal = this.closeModal.bind(this)

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <Modal open={this.state.modalIsOpen} onClose={this.closeModal}>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html: `
                .subscribe-modal-content{
                   margin: 20px 40px;
                   color: #fff;
                }

                .subscribe-modal-content .text{
                    margin-right: 20px;
                 }
                 .subscribe-modal-content a{
                    color: #fff;
                 }

                .subscribe-modal-content input {
                    width: 100%;
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
        <div className="subscribe-modal-content">
          <div className="text">
            <h1>
              SUBSCRIBE TO <br />
              OUR NEWSLETTER
            </h1>
          </div>

          <SubscribeSection onSuccess={this.closeModal} button={false} />
        </div>
      </Modal>
    )
  }
}

export default SubscribeModal
