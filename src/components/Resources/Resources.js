import React from 'react'
import style from './Resources.module.css'
import Tada from 'react-reveal/Tada';

import LoanRange from './LoanRange/LoanRange'

const resources = (props) => {

  let mostAccurate = props.LoanAmount.indexOf(Math.max(...props.LoanAmount))

  return (
    <div id="loan-result" className={style.wrapper}>
    <p> You may be eligible for</p>
    <Tada>
    <LoanRange accurateRange={mostAccurate} />
    </Tada>
    <p> {props.Lender} - {props.LoanType} </p>

    <p> from {props.Lender}.</p>
    <p> *Results were predicted with {Math.round(props.LoanAmount[mostAccurate]*100)}% accuracy. No amounts are gaurenteed. </p>
    </div>
    )
  }


export default resources
