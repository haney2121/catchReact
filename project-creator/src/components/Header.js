import React, { Fragment } from 'react';

const Header = ({tagline}) => {
  return (
    <Fragment>
    <header className="top">
      <h1>
        Project
        <span className="ofThe">
          <span className="of">Of</span>
          <span className="the">The</span>
        </span>
        Day
      </h1>
      <h3 className="tagline">
        <span>{tagline}</span>
      </h3>
    </header>
  </Fragment>
  )
}

export default Header;