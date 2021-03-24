import React from 'react'
import './Form.module.css'

const Form = ({ form, handleSubmit, handleInputChange }) => (
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
    name="jobs"
    type="text"
    placeholder="Enter number of employees here please"
    value={form.jobs}
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
    <button type="submit">Submit</button>
    </form>
  )

export default Form
