import React from 'react'
import style from './Resources.module.css'
// import Tada from 'react-reveal/Wobble';

const resources = props => {
  let mostAccurate = props.LoanAmount.indexOf(Math.max(...props.LoanAmount))
  let loan = null

  switch (mostAccurate) {
    case 0:
      loan = <p className={style.loan}>$5 - 10 million*</p>
      break
    case 1:
      loan = <p className={style.loan}>$2 - 5 million*</p>
      break
    case 2:
      loan = <p className={style.loan}>$1 - 2 million</p>
      break
    case 3:
      loan = <p className={style.loan}>$350,000 - 1 million</p>
      break
    case 4:
      loan = <p className={style.loan}>$150,000 - 350,000</p>
      break
    case 5:
      loan = <p className={style.loan}>$1,000 - 150,000</p>
      break
    default:
      loan = <h1 className={style.noData}> Error - No Data Avalible</h1>
  }

  return (
    <div className={style.wrapper}>
      <p>We predict you could qualify for:</p>

      <p>A Payroll Protection Plan loan for </p>
      {/* <Tada> */}
      <h2>{loan}</h2>
      {/* </Tada> */}
      <p>
        To learn more and apply visit the{' '}
        <a href="https://www.sba.gov/funding-programs/loans/covid-19-relief-options/paycheck-protection-program">
          PPP loan site.
        </a>
      </p>

      <p className={style.finePrint}>
        * Results were predicted with up to 80% accuracy. No amounts are
        guaranteed.
      </p>
    </div>
  )
}

export default resources
