import React, { Component } from 'react'
import Layout from './components/Layout/Layout'
// import { Route, Link } from 'react-router-dom';
import './App.css'
// import Form from './container/Form/Form'
import Resources from './components/Resources/Resources'

// Routes
import CreateForm from './container/Form/CreateForm'

import Header from './components/Header'
import Hero from './components/Hero'
import Copy from './components/Copy'

class App extends Component {
  state = {
    result_visibility: false,
    no_result_visibility: false,
      lender: '',
      nonprofit: '',
      jobsreported: '',
      state: '',
    probabilities: []
  }

  formData = (formData) => {
      this.setState({ probabilities: formData.probabilities })
      this.setState({ lender: formData.form.lender })
  }

  showResult = () => {
    this.setState({result_visibility: true, no_result_visibility: false})
  }

  noResult = () => {
    this.setState({no_result_visibility: true, result_visibility: false})
  }

  clearResult = () => {
    this.setState({no_result_visibility: false, result_visibility: false})
  }

render() {
  return (
    <div className="app">
        <Header />
        <Hero />
        <Copy />
    <Layout>
    <CreateForm

      formData={this.formData}
      showResult={this.showResult}
      noResult={this.noResult}
      clearResult={this.clearResult}
    />

    { this.state.no_result_visibility ?
      "This lender isnt a good match, please try with another lender"
     : null }

    { this.state.result_visibility ?
    <Resources
      LoanAmount={this.state.probabilities}
      Lender={this.state.lender}
      /> : null }
    </Layout>
    </div>
  );
}
}

export default App
