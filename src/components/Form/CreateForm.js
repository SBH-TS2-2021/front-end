import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../apiConfig'

import Form from './Form'

// Class
class CreateForm extends Component {
  constructor () {
    super()

    this.state = {
      form: {
        naics: '',
        zip: '',
        lender: '',
        nonprofit: '',
        jobs: '',
        state: ''
      },
      // created: false
      createdId: null
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { form } = this.state
    axios({
      method: 'post',
      url: `${apiUrl}/form`,
      data: { form }

    })
      .then(res => this.setState({ createdId: res.data.form._id }))
      .catch(console.error)
  }

  handleInputChange = (event) => {
    event.persist()
    this.setState(state => {
    return {
      form: { ...state.form, [event.target.name]: event.target.value }
    }
  })
  }

  render () {
    if (this.state.createdId) {
      return <Redirect to={`/show-resources/${this.state.createdId}`}/>
    }
    return (
      <Fragment>
        <h2>tell us more about your business</h2>
        <Form
          form={this.state.form}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />
      </Fragment>
    )
  }
}

// Export
export default CreateForm
