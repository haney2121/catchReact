import React, { Component, Fragment } from "react";

class AddPmsForm extends Component {
  //ref created for form data- similiar to body parser for express.
    pmsRef = React.createRef();
    typeRef = React.createRef();
    integrationTypeRef = React.createRef();
    integrationMethodRef = React.createRef();
    salesRepActionItemRef = React.createRef();

  createPms = event => {
    //stop submission
    event.preventDefault();
    const pms = {
      pmsName: this.pmsRef.current.value,
      type: this.typeRef.current.value,
      integrationType: this.integrationTypeRef.current.value,
      integrationMethod: this.integrationMethodRef.current.value,
      salesRepActionItem: this.salesRepActionItemRef.current.value
    }
    this.props.addPms(pms);
    //refresh forms
    event.currentTarget.reset();
  };

  render() {
    return (
      <Fragment>
        <form className="fish-edit" onSubmit={this.createPms}>
          <input name="pmsName" ref={this.pmsRef} type="text" placeholder="PMS Name" />
          <input name="type" ref={this.typeRef} type="text" placeholder="Type" />
          <select name="integrationType" ref={this.integrationTypeRef}>
            <option value="1-way">1-way</option>
            <option value="2-way">2-way</option>
            <option value="Contact Sales Engineering"> Contact Sales Engineering </option>
          </select>
          <input name="integrationMethod" ref={this.integrationMethodRef} type="text" placeholder="Integration Method" />
          <textarea name="salesRepActionItem" ref={this.salesRepActionItemRef} placeholder="Sales Rep Action Item" />
          <button type="submit">Add EMR to Matrix</button>
        </form>
      </Fragment>
    );
  }
}

export default AddPmsForm;
