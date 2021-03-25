import React from 'react'
import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/Dropdown'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header>
      <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
      <Nav.Link href="/about-us">About Us</Nav.Link>
      </Nav.Item>
      </Nav>
        <h1 className="title">Dough Boi (working title)</h1>
        <h2 className="subtitle">Helping your company get back on track</h2>
      </header>
    )
  }
}
