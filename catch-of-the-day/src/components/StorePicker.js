import React, { Component, Fragment } from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {
    
    myInput = React.createRef();
    
    goToStore = event => {
        event.preventDefault();
        const storeName = this.myInput.value.value;
        this.props.history.push(`/store/${storeName}`);
    };

    render(){
        return (
            <Fragment>
                {/* How to Coment*/}
                <form onSubmit={this.goToStore} className="store-selector">
                    <h2>Please Enter a Store</h2>
                    <input type="text" required defaultValue={getFunName()} ref={this.myInput}/>
                    <button type="submit">Visit Store ></button>
                </form>
            </Fragment>
        )
    }
}

export default StorePicker;