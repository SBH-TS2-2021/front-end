import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import Form from './Form'

import axios from 'axios'
import apiUrl from '../../apiConfig'


// Class
class CreateForm extends Component {
  constructor (props) {
    super(props)

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

  handleSubmit = event => {
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

  handleInputChange = event => {
    event.persist()
    this.setState(state => {
    return {
      form: { ...state.form, [event.target.name]: event.target.value }
    }
  })
  }

  render () {
    const { form, createdId } = this.state
    if (createdId) {
      return <Redirect to={`/show-resources/${this.state.createdId}`}/>
    }
    return (
      <Fragment>
        <h2><center>tell us more about your business</center></h2>
        <Form
          form={form}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />
      </Fragment>
    )
  }
}

// Export
export default CreateForm
