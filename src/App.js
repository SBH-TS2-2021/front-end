import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
// import { Route } from 'react-router-dom';
import './App.css';
import Form from './components/Form/Form'
import Resources from './components/Resources/Resources'

// Routes
// import CreateForm from './components/Form/CreateForm'

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

export default App
