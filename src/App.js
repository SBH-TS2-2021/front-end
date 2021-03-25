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

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Hero />
        <Layout>
          <CreateForm />
          <Resources />
        </Layout>
      </div>
    )
  }
}

export default App
