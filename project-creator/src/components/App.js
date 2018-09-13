import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    return (
    <Fragment> {/* Allows use of sibling element sin Jsx */}
        <header id="header">
          <a href="/projects">Projects</a>
        </header>
        {/* <section>
          <ProjectApp />
        </section> */}
        
      </Fragment>
    );
  }
}

export default App;