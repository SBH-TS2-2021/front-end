import React from 'react'
import style from './Resources.module.css'

const resources = (props) => {

  return (
    <div className={style.wrapper}>
    <p> You may be eligible for </p>
    <h2 className={style.test}> ${props.LoanAmount}* </h2>
    <p> {props.Lender} - {props.LoanType} </p>

    <p> Based on the information provided, we estimate you are eligible for PROPS.MONEY
    from {props.Lender} as a {props.LoanType}. While we can not gaurentee, this would be a
    good place to start. Try selecting a different lender for another result.</p>
    <p> Results are predicted with {props.Accuracy} accuracy. No amounts are gaurenteed. </p>
    </div>
    )
  }

export default resources
