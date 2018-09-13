import React, { Component, Fragment } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class ProjectApp extends Component {
  render(){
    return (
      <Fragment>
        <Header tagline="Projects Ready"/>
        <div className="catch-of-the-day">
          <div className="menu">
          <Order tagline="Nothing here yet"/>
          </div>
          
          <Inventory tagline="follow the props"/>
        </div>
      </Fragment>
    )
  }
}

export default ProjectApp;