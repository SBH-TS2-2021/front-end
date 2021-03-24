import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
// import { Route, Link } from 'react-router-dom';
import './App.css';
// import Form from './container/Form/Form'
import Resources from './components/Resources/Resources'

// Routes
import CreateForm from './container/Form/CreateForm'

class App extends Component {
render() {
  return (
    <div>
    <Layout>
    <CreateForm />
    <Resources />
    </Layout>
    </div>
  );
}
}

export default App
