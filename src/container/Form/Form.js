import React from 'react'
import './Form.module.css'
import lenders from './lenders'

const Form = ({ handleSubmit, handleInputChange, form, handleReset }) => (
  <form onSubmit={handleSubmit}>
  <span>Where is your business located?</span>
  <br />
  <br />
    <center>
  <span>Enter zipcode:</span>
    <input
    required
    style={{ maginLeft: '1rem' }}
    name="zip"
    type="text"
    placeholder="XXXXX"
    value={form.zip}
    onChange={handleInputChange}
    />
    </center>
    <br />
    <span>What kind of business is it?</span>
    <br/>
    <br/>
    <center>
    <span>Enter NAICS Code:</span>
    <input
    required
    name="naics"
    type="text"
    placeholder="XXXXXX"
    value={form.naics}
    onChange={handleInputChange}
    />
    <br/>
    <small>
    Find your NAICS code <a href="https://www.naics.com/naics-identification-help/" target="_blank" rel="noreferrer">here</a>.
    </small>
    </center>
    <br/><br/>
    <span>Nonprofit status:</span>
    <div className="checkbox">
         <label htmlFor="nonprofit">
         <center>
           <input
            name="nonprofit"
             type="checkbox"
             value="Yes"
           />
           My business is a nonprofit.
           </center>
         </label>
         </div>
      <br/><br/>
    <span>Number of employees:</span>
    <center>
    <input
    required
    name="jobsreported"
    type="text"
    placeholder="Enter number of employees here please"
    value={form.jobsreported}
    onChange={handleInputChange}
    />
    </center>
    <br/>
    <span>State:</span>
    <center>
    <input
    required
    name="state"
    type="text"
    placeholder="Enter your state here please"
    value={form.state}
    onChange={handleInputChange}
    />
  </center>
   <br/>
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
    <center>
    <button type="button" onClick={handleReset}>Clear Form</button>&nbsp;&nbsp;&nbsp;
    <button type="submit">Predict Loan Amount</button>
    </center>
  </form>
)

export default Form
