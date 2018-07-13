import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/dashboard/Dashboard';
import Form from './component/form/Form';
import Header from './component/header/Header';
import Product from './component/product/Product';
import axios from 'axios';


class App extends Component {
  constructor(){
    super()
    this.state = {
      prods: []
    }
  }

  componentDidMount(){
    axios.get("/api/products")
    .then((results => this.setState({ prods: results.data })));
    console.log(this.state.prods)
  }

  render() { 
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <Form />


      </div>
    );
  }
}

export default App;
