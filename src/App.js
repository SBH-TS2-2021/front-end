import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Resources from './components/Resources/Resources'

import CreateForm from './container/Form/CreateForm'

import Header from './components/Header'
import Hero from './components/Hero'
import Copy from './components/Copy'
import About from './components/About'

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

  formData = formData => {
    this.setState({ probabilities: formData.probabilities })
    this.setState({ lender: formData.form.lender })
  }

  showResult = () => {
    this.setState({ result_visibility: true, no_result_visibility: false })
  }

  noResult = () => {
    this.setState({ no_result_visibility: true, result_visibility: false })
  }

  clearResult = () => {
    this.setState({ no_result_visibility: false, result_visibility: false })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route path="/about-us" component={About} />
          <Route
            path="/"
            render={() => (
              <>
                <Hero />
                <Copy />
                <CreateForm
                  formData={this.formData}
                  showResult={this.showResult}
                  noResult={this.noResult}
                  clearResult={this.clearResult}
                />
                <div className="results">
                  {this.state.no_result_visibility
                    ? 'This lender isnt a good match, please try with another lender'
                    : null}
                  {this.state.result_visibility ? (
                    <Resources
                      LoanAmount={this.state.probabilities}
                      Lender={this.state.lender}
                    />
                  ) : null}
                </div>
              </>
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default App
