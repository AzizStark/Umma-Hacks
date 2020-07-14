import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css';
import App from './app/App';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div style={{minHeight: '100vh'}}>
      <Route exact path="/" component={App} />
      {/* <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} /> */}
    </div>
  </Router>
)

ReactDOM.render(routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
