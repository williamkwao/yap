import React, { Component } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styled from 'styled-components'

const SubscribeStyle = styled.div``

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
        console.log('result', result)
        this.setState({ resultMessage: result.msg })
      } catch (error) {
        console.log('error', error.msg)
        this.setState({ resultMessage: error.msg })
      }
    } else {
      this.setState({ resultMessage: 'Enter a valid email' })
    }
  }
  render() {
    return (
      <SubscribeStyle>
        <h3>Keep up Keep Up With Young African Professionals DC </h3>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="email" name="email" placeholder="email" />
          <button type="submit">Subscribe</button>
        </form>
        <p>{this.state.resultMessage} </p>
      </SubscribeStyle>
    )
  }
}

export default SubscribeSection
