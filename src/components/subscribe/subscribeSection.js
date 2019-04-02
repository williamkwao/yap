import React, { Component } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styled from 'styled-components'

const SubscribeStyle = styled.div`
  input {
    border-radius: 4px;
    padding: 6px;
    box-shadow: none;
  }

  button {
    padding: 6px;
    font-weight: bold;
    border-radius: 4px;
  }
`

class SubscribeSection extends Component {
  state = {
    resultMessage: '',
  }
  handleSubmit = async e => {
    e.preventDefault()
    const email = e.target.email.value
    var re = /\S+@\S+/
    if (re.test(email)) {
      try {
        const result = await addToMailchimp(email)
        if (result.result === 'success') {
          this.props.onSuccess()
        }
        this.setState({ resultMessage: result.msg })
      } catch (error) {
        this.setState({ resultMessage: error.msg })
      }
    } else {
      this.setState({ resultMessage: 'Enter a valid email' })
    }
  }
  render() {
    return (
      <SubscribeStyle className="subscribe">
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="email" name="email" placeholder="email" />
          {this.props.button ? <button type="submit">Subscribe</button> : null}
        </form>
        {this.state.resultMessage ? (
          <p
            dangerouslySetInnerHTML={{
              __html: this.state.resultMessage,
            }}
          />
        ) : null}
      </SubscribeStyle>
    )
  }
}

export default SubscribeSection
