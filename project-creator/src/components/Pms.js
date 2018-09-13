import React, { Component, Fragment } from "react";

class Pms extends Component {
  render() {
    const {pmsName, type, salesRepActionItem, integrationType, integrationMethod} = this.props.details;

    return (
      <Fragment>
        <li className="menu-fish flexbox">
          <p>{pmsName}</p>
          <p>{type}</p>
          <p>{salesRepActionItem}</p>
          <p>{integrationType}</p>
          <p>{integrationMethod}</p>
        </li>
      </Fragment>
    );
  }
}

export default Pms;
