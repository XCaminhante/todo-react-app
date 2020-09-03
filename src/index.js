import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker.js';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import './assembly.css'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
      </Switch> </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
serviceWorker.unregister();
