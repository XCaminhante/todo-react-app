import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import TodoLogin from "./screens/login.js"
import TodoSignup from "./screens/signup.js"
import TodoTasks from "./screens/tasks.js"

import './assembly.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TodoLogin}></Route>
        <Route exact path="/signup" component={TodoSignup}></Route>
        <Route exact path="/tasks" component={TodoTasks}></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
