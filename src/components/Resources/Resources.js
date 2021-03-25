import React from 'react'
import style from './Resources.module.css'

import LoanRange from './LoanRange/LoanRange'

const resources = (props) => {

  let mostAccurate = props.LoanAmount.indexOf(Math.max(...props.LoanAmount))

  return (
    <div className={style.wrapper}>
    <p> You may be eligible for</p>
    <LoanRange accurateRange={mostAccurate} />
    <p> {props.Lender} - {props.LoanType} </p>

    <p> Based on the information provided, we estimate you are eligible for PROPS.MONEY
    from {props.Lender} as a {props.LoanType}. While we can not gaurentee, this would be a
    good place to start. Try selecting a different lender for another result.</p>
    <p> *Results were predicted with {Math.round(props.LoanAmount[mostAccurate]*100)}% accuracy. No amounts are gaurenteed. </p>
    </div>
    )
  }


export default resources
