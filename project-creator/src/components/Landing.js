import React, { Component, Fragment } from 'react';

class Landing extends Component {

  goToMatrix = (event) => {
    event.preventDefault();
    this.props.history.push(`/matrix`);
  }

  render() {
    return (
    <Fragment> {/* Allows use of sibling element sin Jsx */}
        <header className="top">
      <h1>
       Ingeration Matrix        
      </h1>
      <h3 className="tagline">
        <span>Your EMR Search Site</span>
      </h3>
    </header>
    <form className="store-selector" onSubmit={this.goToMatrix}>
      <h2>Please Enter the Matrix</h2>
      <button type="submit">Enter</button>    
    </form>
      </Fragment>
    );
  }
}

export default Landing;