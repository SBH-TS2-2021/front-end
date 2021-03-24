import React from 'react'
import './Form.module.css'
import lenders from './lenders'

const Form = ({ handleSubmit, handleInputChange, form }) => (
  <form onSubmit={handleSubmit}>
    <input
      required
      name="naics"
      type="text"
      placeholder="Enter NAICS number here"
      value={form.naics}
      // console.log(this.form.naics)
      onChange={handleInputChange}
    />
    <input
      required
      name="zip"
      type="text"
      placeholder="Enter zipcode here"
      value={form.zip}
      onChange={handleInputChange}
    />
    <input
      required
      name="jobsreported"
      type="text"
      placeholder="Enter number of employees here please"
      value={form.jobsreported}
      onChange={handleInputChange}
    />
    <input
      required
      name="state"
      type="text"
      placeholder="Enter your state here please"
      value={form.state}
      onChange={handleInputChange}
    />
    <div>
      <label htmlFor="lender">Lender:</label>
      <select id="lender" name="lender" onChange={handleInputChange}>
        {lenders.map(lender => (
          <option key={lender} value={lender}>
            {lender}
          </option>
        ))}
      </select>
    </div>
    <button type="submit">Submit</button>
  </form>
)

export default Form
