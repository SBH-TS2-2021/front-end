import React, { Component } from 'react'

import classes from './LoanRange.module.css'

class LoanRange extends Component {

  render () {
    let loan = null;

    switch ( this.props.accurateRange ) {
      case (0):
          loan = <h1 className={classes.loan5to10mil}>"$5 - 10 million*"</h1>
          break;
      case (1):
          loan = <h1 className={classes.loan2to5mil}>"$2 - 5 million*"</h1>
          break;
      case (2):
          loan = <h1 className={classes.loan1to2mil}>"$1 - 2 million*"</h1>
          break;
      case (3):
          loan = <h1 className={classes.loan350kto1mil}>"$350,000 - 1 million*"</h1>
          break;
      case (4):
          loan = <h1 className={classes.loan150to350k}>"$150,000 - 350,000*"</h1>
          break;
      case (5):
          loan = <h2 className={classes.loan1to150k}>"$10,000 - 150,000*"</h2>
          break;
      default:
          loan = <h1 className={classes.noData}>  "Error - No Data Avalible"</h1>
        }
        return loan
    }
}

export default LoanRange
