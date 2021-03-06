import React, { Component } from 'react'
import TeamMembersCards from './TeamMembers/TeamMembersCards.js'

export default class About extends Component {
  render() {
    return (
      <div className="about-us-container">
        <h2 className="subtitle">About Us</h2>
        <p>
          We are a team of General Assembly graduates participating in a Small
          business Hackathon March 23-25, 2021. Our task was to design an
          e-commerce solution to help services-oriented business recover from
          the COVID-19 pandemic. We had a great time working together, and we'd
          love to work with you too!
        </p>
        <TeamMembersCards />
      </div>
    )
  }
}
