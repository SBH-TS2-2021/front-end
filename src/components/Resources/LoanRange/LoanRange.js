import React, { Component } from 'react'

import classes from './LoanRange.module.css'

class LoanRange extends Component {

  render () {
    let loan = null;

    switch ( this.props.accurateRange ) {
      case (0):
          loan = <h2 className={classes.xxl}>A billion :)</h2>
          break;
      case (1):
          loan = <h2 className={classes.xl}>Million!</h2>
          break;
      case (2):
          loan = <h2 className={classes.l}>6 figures!</h2>
          break;
      case (3):
          loan = <h2 className={classes.m}>Twenty Thousand</h2>
          break;
      case (4):
          loan = <h2 className={classes.s}>Hundo's</h2>
          break;
      case (5):
          loan = <h2 className={classes.xs}>Three Dollars</h2>
          break;
      default:
          loan = null
        }
        return loan
    }
}

export default LoanRange
