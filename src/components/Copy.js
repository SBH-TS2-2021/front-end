import { Component } from 'react'

export default class Copy extends Component {
  render() {
    return (
      <div id="read-more" className="read-more">
        <h2 className="read-more-title subtitle">Why StimuLink?</h2>
        <p className="read-more-copy">
          We built StimuLink as a starting point for small business owners to
          find loans or grants to cover lost revenue from time spent closed or
          at limited capacity. Based on data about previously awarded loans and
          grants, we can predict a given lender’s likely loan range for your
          business and then direct you to further resources. Just answer a few
          questions about your business and choose a potential lender to see
          what our model predicts for you!
          <br />
          <br />
          NOTE: This site is a prototype and currently only covers PPP loans,
          but we hope to expand it to more loan and grant options moving
          forward!
        </p>
      </div>
    )
  }
}
