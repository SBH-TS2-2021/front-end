import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Form from './Form'

import axios from 'axios'
import apiUrl from '../../apiConfig'

import codes from './naicscodes'

// Class
class CreateForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      form: {
        naics: '',
        zip: '',
        lender: '',
        nonprofit: '',
        jobsreported: '',
        state: ''
      },
      probabilities: [],
      // created: false
      createdId: null
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const { form } = this.state

    form.lender = form.lender === 'Other' ? 'other' : form.lender
    if (codes.includes(form.naics) === false) form.naics = 'other'

    axios({
      method: 'post',
      url: `${apiUrl}`,
      data: {
        ...form,
        nonprofit: 0
      }
    })
      .then(res => this.setState({ probabilities: res.data.probabilities }))
      .then(() => this.props.formData(this.state))
      .then(() => this.props.showResult())
      .catch(() => this.props.noResult())
  }

  handleInputChange = event => {
    event.persist()
    this.setState(state => {
      return {
        form: { ...state.form, [event.target.name]: event.target.value }
      }
    })
  }

  // handleReset = event => {
  //     this.form.reset()
  // }

  handleReset = event => {
    this.setState({
      form: {
        naics: '',
        zip: '',
        lender: '',
        nonprofit: '',
        jobsreported: '',
        state: ''
      },
      probabilities: [],
      // created: false
      createdId: null
    })
    this.props.clearResult()
  }

  render() {
    const { form, createdId } = this.state
    if (createdId) {
      return <Redirect to={`/show-resources/${this.state.createdId}`} />
    }
    return (
      <div id="loan-form-container" className="loan-form-container">
        <h2 className="loan-form-title subtitle">Try our loan predictor!</h2>
        <Form
          form={form}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          handleReset={this.handleReset}
        />
      </div>
    )
  }
}

// Export
export default CreateForm
