import { Component } from 'react'

export default class Copy extends Component {
  render() {
    return (
      <div id="read-more" className="read-more">
        <h2 className="read-more-title subtitle">Why Dough Boi?</h2>
        <p className="read-more-copy">
          Small businesses have been hit hard by the COVID-19 pandemic,
          especially those businesses that don’t have the luxury of working
          virtually. Many need extra funds to cover lost revenue from time spent
          closed or at limited capacity, but it can be difficult to know where
          to start when looking for loans or grants.
          <br />
          <br />
          We built Dough Boi to help small business owners find a starting
          point. Based on data about previously awarded PPP loans, we can
          predict a given lender’s likely loan range for your business with 88%
          accuracy. Just answer a few questions about your business and choose a
          potential lender to see what our model predicts for you!
          <br />
          <br />
          NOTE: This site is a prototype and currently covers PPP loans for New
          York and Virginia, but we hope to expand it to more states and more
          loan options moving forward!
        </p>
      </div>
    )
  }
}
