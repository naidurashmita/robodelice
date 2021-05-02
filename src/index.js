import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import CrepeTopping from './CrepeToppingPage/CrepeTopping';
import WaffleTopping from './WaffleTopping/WaffleTopping';

ReactDOM.render(
  <Router>
      <Route path="/" exact component={App}/>
      <Route path ="/crepeTopping" component={CrepeTopping}/>
      <Route path ="/waffleTopping" component={WaffleTopping}/>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
