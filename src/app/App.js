import React, { Component } from 'react';
import HomePage from '../home_page/HomePage';
import Contact from '../contact/Contact';
import Product from '../product_page/Product'
class App extends Component {
  render() {
    return (
      <HomePage />
      //<Product />
      //<Contact />
    );
  }
}
export default App;