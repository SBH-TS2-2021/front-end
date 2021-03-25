import { Component } from 'react'
import heroimg from '../hero.jpg'

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-img-container">
          <img src={heroimg} alt="hero" className="hero-img" />
          <small>
            Photo by{' '}
            <a
              href="https://unsplash.com/@awcreativeut?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noreferrer"
            >
              Adam Winger
            </a>{' '}
            on{' '}
            <a
              href="https://unsplash.com/s/photos/hair-salon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noreferrer"
            >
              Unsplash
            </a>
          </small>
        </div>
        <div className="hero-content">
          <p className="hero-copy">
            Welcome to Dough Boi! We’re here to help small business owners by
            predicting how much they might qualify for in loans from different
            lenders.
          </p>
          <div className="hero-buttons">
            <a href="#read-more" className="read-more-button hero-button">
              Read More
            </a>
            <a href="#loan-form" className="predict-loan-button hero-button">
              Predict Loan
            </a>
          </div>
        </div>
      </div>
    )
  }
}
