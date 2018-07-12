import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/dashboard/Dashboard';
import Form from './component/form/Form';
import Header from './component/header/Header';
import Product from './component/product/Product';


class App extends Component {
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
