import React from 'react'
import './Form.module.css'

const Form = ({ handleSubmit, handleInputChange, form, handleReset }) => (
  <form onSubmit={handleSubmit}>
  Where is your business located?
  <center>
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
    <input
    required
    name="naics"
    type="text"
    placeholder="Enter NAICS number here"
    value={form.naics}
    // console.log(this.form.naics)
    onChange={handleInputChange}
    />
    </center>
    <br/><br/>
    <span>Nonprofit status:</span>
    <div className="radio">
         <label>
         <center>
           <input
            name="nonprofit"
             type="radio"
             value="Yes"
             checked={form.nonprofit === "Yes"}
             onChange={handleInputChange}
           />
           My business is a nonprofit.
           </center>
         </label>
         </div>
        <div className="radio">
         <label>
          <center>
         <input
          name="nonprofit"
           type="radio"
           value="No"
           checked={form.nonprofit === "No"}
           onChange={handleInputChange}
         />
         My business is not a nonprofit.
        </center>
       </label>
       <small><center>If you aren't sure, please choose 'No'.</center></small>
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
    <center>
    <button type="button" onClick={handleReset}>Clear Form</button>&nbsp;&nbsp;&nbsp;
    <button type="submit">Predict Loan Amount</button>
    </center>
    </form>
  )

export default Form
