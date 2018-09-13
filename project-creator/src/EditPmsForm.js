import React, { Component, Fragment } from 'react';

class EditPmsForm extends Component {
    handleChange = (event) => {
        //update the pms
        //make a copy of the current pms
        const updatedPms = {...this.props.pms, [event.currentTarget.name]: event.currentTarget.value};
        this.props.updatePms(this.props.index, updatedPms);
    }
    render(){
        return(
            <Fragment>
                <div className="fish-edit">      
                    <input name="pmsName" type="text" placeholder="PMS Name" onChange={this.handleChange} value={this.props.pms.pmsName}/>
                    <input name="type" type="text" placeholder="Type" onChange={this.handleChange} value={this.props.pms.type}/>
                    <select name="integrationType" onChange={this.handleChange} value={this.props.pms.integrationType}>
                        <option value="1-way">1-way</option>
                        <option value="2-way">2-way</option>
                        <option value="Contact Sales Engineering"> Contact Sales Engineering </option>
                    </select>
                    <input name="integrationMethod" type="text" placeholder="Integration Method" onChange={this.handleChange} value={this.props.pms.integrationMethod}/>
                    <textarea name="salesRepActionItem" placeholder="Sales Rep Action Item" onChange={this.handleChange} value={this.props.pms.salesRepActionItem}/>
                    <button type="submit">Add EMR to Matrix</button>
                </div>
            </Fragment>
        )
    }
}

export default EditPmsForm;