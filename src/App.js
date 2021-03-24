import React, { Component } from 'react';
import Layout from './components/Layout/Layout'

import './App.css';
import Form from './components/Form/Form'
import Resources from './components/Resources/Resources'


class App extends Component {
render() {
  return (
    <div>
    <Layout>
    <Form />
    <Resources />
    </Layout>
    </div>
  );
}
}

export default App;
