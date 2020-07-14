import React from 'react';
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    //Global state variables
    this.state = {
      amount: '',
      zakat: 'as'
    }
  }

  //Function for calculating zakat
  calculateZakat = () => {
    let zakat;
    zakat = (this.state.amount / 100) * 2.5
    this.setState({ zakat: zakat })
  }

  render() {
    return (
      <div className="App">

        <nav className="navbar is-success" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28" />
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </nav>

        <div className="columns" style={{ minHeight: '100vh' }}>
          <div className="column" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <input type="number" placeholder="Enter amount" /*This functn sets the input value into state variable --> */ onChange={(e) => this.setState({ amount: e.target.value })} />
            <input type="button" value="Calculate Zakat" /* Function is triggered here --> */ onClick={() => this.calculateZakat()} /> 
            <h3> Calculated Zakat: {this.state.zakat} </h3>
          </div>
        </div>

      </div>
    );
  }
}

