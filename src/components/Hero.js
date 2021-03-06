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
              href="https://unsplash.com/@soucarlosmagno?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              className="form-link"
              target="_blank"
              rel="noreferrer"
            >
              Carlos Magno
            </a>{' '}
            on{' '}
            <a
              href="https://unsplash.com/s/photos/hair-salon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              className="form-link"
              target="_blank"
              rel="noreferrer"
            >
              Unsplash
            </a>
          </small>
        </div>
        <div className="hero-content">
          <p className="hero-copy">
            Welcome to StimuLink! We’re here to help small business owners by
            predicting how much they might qualify for from various loan or
            grant programs.
          </p>
        </div>
      </div>
    )
  }
}
