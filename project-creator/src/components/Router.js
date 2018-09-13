import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import ProjectApp from './ProjectApp';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/projects" component={ProjectApp} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router;