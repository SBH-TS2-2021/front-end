import React, { Component } from 'react';
import Layout from './components/Layout/Layout'

import './App.css';
import Form from './components/Form/Form'
import Resources from './components/Resources/Resources'


class App extends Component {
  state = {
    result_visibility: false
  }

  // this.setState({result_visibility: true})

render() {
  return (
    <div>
    <Layout>
    <Form />
    <Resources
      LoanAmount='60-70,000'
      Lender='TestBank'
      LoanType='CARES PPP'
      Accuracy="80%"
      Visible={this.state.result_visibility}/>
    </Layout>
    </div>
  );
}
}

export default App;
