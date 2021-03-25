import React from 'react'
import { Link } from 'react-router-dom'
import { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="titles">
          <h1 className="title">StimuLink</h1>
          <h2 className="subtitle">Helping your company get back on track</h2>
        </div>
        <div className="nav">
          <Link to="/" className="home-link form-link">
            Home
          </Link>
          <Link to="/about-us" className="about-link form-link">
            About Us
          </Link>
        </div>
      </header>
    )
  }
}
