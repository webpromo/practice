import React, { Component } from 'react';
import Product from '../product/Product';

class Dashboard extends Component {
  render() {
    return (

<div id="parent"> 

  <div>
    <h1>
      Dashboard
    </h1>
  </div>
  <Product />

</div>
    );
  }
}

export default Dashboard;