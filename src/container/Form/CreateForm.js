import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import Form from './Form'

import axios from 'axios'
import apiUrl from '../../apiConfig'

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
    axios({
      method: 'post',
      url: `${apiUrl}`,
      data: {
        ...form,
        nonprofit: 0,
        lender: 'JPMorgan Chase Bank, National Association'
      }
    })
      .then(res => this.setState({ probabilities: res.data.probabilities }))
      .catch(console.error)
      console.log(form)
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
    this.setState({ form: {
      naics: '',
      zip: '',
      lender: '',
      nonprofit: '',
      jobsreported: '',
      state: ''
    },
    probabilities: [],
    // created: false
    createdId: null })
  }

  render() {
    const { form, createdId } = this.state
    if (createdId) {
      return <Redirect to={`/show-resources/${this.state.createdId}`} />
    }
    return (
      <Fragment>
        <h2>
          <center>Try our loan predictor!</center>
        </h2>
        <Form
          form={form}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          handleReset={this.handleReset}
        />
      </Fragment>
    )
  }
}

// Export
export default CreateForm
