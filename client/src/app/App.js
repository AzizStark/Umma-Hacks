import React from 'react';
import './App.css';
import Calculator from './calculator/calculator';
import Donate from './donate/donate';
import { Route, BrowserRouter as Router } from 'react-router-dom';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    //Global state variables
    this.state = {
      amount: '',
      zakat: '',
    }
  }

  //Function for calculating zakat
  calculateZakat = () => {
    let zakat;
    if (this.state.amount === '') {
      alert("Enter an amount")
      return;
    }
    zakat = (this.state.amount / 100) * 2.5
    this.setState({ zakat: zakat.toFixed(2) })
  }


  render() {
    return (
      <div className="App">

        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
  
            <a class="navbar-item">
              Home
            </a>

            <a class="navbar-item" href="/zakat">
              Zakat calculator
            </a>

            <a class="navbar-item">
              Islamic content
            </a>

            <a class="navbar-item">
              About us
            </a>

            <a class="navbar-item" href="/login">
              Community login
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </nav>

        <Router>
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/zakat" component={Calculator} />
        </Router>

      </div>
    );
  }
}

