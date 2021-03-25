import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
// import { Route, Link } from 'react-router-dom';
import './App.css';
// import Form from './container/Form/Form'
import Resources from './components/Resources/Resources'

// Routes
import CreateForm from './container/Form/CreateForm'

class App extends Component {
  state = {
    result_visibility: false,
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
  this.setState({result_visibility: true})
}

render() {
  return (
    <div>
    <Layout>
    <CreateForm

      formData={this.formData}
      showResult={this.showResult}
    />
    { this.state.result_visibility ?
    <Resources
      LoanAmount={this.state.probabilities}
      Lender={this.state.lender}
      LoanType='CARES PPP'
      Accuracy={this.state.probabilities[0]}
      /> : null }
    </Layout>
    </div>
  );
}
}

export default App
