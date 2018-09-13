import React, { Component, Fragment } from "react";
import AddFishForm from "./AddFishForm";
// import EditFishForm from "./EditFishForm";

class Inventory extends Component {
    render(){
        return (
            <Fragment>
                <div className="inventory">
                    <h2>Inventory</h2>
                    {/* {Object.keys(this.props.fishes).map(key => <EditFishForm deleteFish={this.props.deleteFish} index={key} updateFish={this.props.updateFish} key={key} fish={this.props.fishes[key]}/>)} */}
                    <AddFishForm addFish={this.props.addFish}/>    
                    <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
                </div>

            </Fragment> 
        )
    }
}

export default Inventory;