import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from '../home_page/HomePage';
import Contact from '../contact/Contact';
import Product from '../product_page/Product';
import InfoPage from '../info_page/InfoPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="route-container">
          <Route exact path='/' component={HomePage} />
          <Route path='/products' component={Product} />
          <Route path='/info' component={InfoPage} />
          <Route path='/contact' component={Contact} />
        </div>
      </Router>

    );
  }
}
export default App;