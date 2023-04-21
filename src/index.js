import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Post from './Post';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/posts/:id" component={Post} />
    </Switch>
  </Router>
);