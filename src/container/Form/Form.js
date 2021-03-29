import React from 'react'
import lenders from './lenders'

const Form = ({ handleSubmit, handleInputChange, form, handleReset }) => (
  <form onSubmit={handleSubmit} className="loan-form">
    <p>
      Each industry has a number that represents it called a NAICS code. Go{' '}
      <a
        href="https://www.naics.com/search"
        target="_blank"
        rel="noreferrer"
        className="form-link"
      >
        here
      </a>{' '}
      to look up your industry's code and enter it below.
    </p>
    <div className="naics">
      <label htmlFor="naics" className="naics-label">
        NAICS Code:
      </label>
      <input
        required
        id="naics"
        name="naics"
        className="form-input"
        type="text"
        placeholder="XXXXXX"
        value={form.naics}
        onChange={handleInputChange}
      />
    </div>

    <p>Now tell us how many employees work for your business.</p>
    <div className="jobsreported">
      <label htmlFor="jobsreported" className="jobsreported-label">
        Number of employees:
      </label>
      <input
        required
        id="jobsreported"
        name="jobsreported"
        className="form-input"
        type="text"
        placeholder="XXXXXX"
        value={form.jobsreported}
        onChange={handleInputChange}
      />
    </div>

    <p className="lender-type">Finally, which lender do you want to check?</p>
    <div className="lender">
      <label htmlFor="lender" className="lender-label">
        Lender:
      </label>
      <select
        id="lender"
        name="lender"
        className="form-input"
        onChange={handleInputChange}
      >
        {lenders.map(lender => (
          <option key={lender} value={lender}>
            {lender}
          </option>
        ))}
      </select>
    </div>

    <div className="form-buttons">
      <button
        type="button"
        onClick={handleReset}
        className="secondary-button ppp-button"
      >
        Clear Form
      </button>
      <button type="submit" className="primary-button ppp-button">
        Predict Loan Amount
      </button>
    </div>
  </form>
)

export default Form
