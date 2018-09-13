import React, { Component, Fragment } from 'react';
import Header from './Header';
import Matrix from './Matrix';
import Inventory from './Inventory';
import samplePms from '../sample-pms';
import Pms from './Pms';
import base from '../base';

class App extends Component {
  state = {
    allPms: {}
  }
  //Syncs DB with State - firebase
  componentDidMount(){
    //reinstates localStorage if it exist
    // const localStorageRef = localStorage.getItem(params.storeId);
    // if(localStorageRef){
    //   this.setState({ matrix: JSON.parse(localStorageRef)});
    // }
    this.ref = base.syncState("/matrix", {
      context: this,
      state: 'allPms'
    });
  }
  //localStorage Setup - takes an object
  // componentDidUpdate(){
  //   localStorage.setItem(this.props.match.params.storeid, JSON.stringify(this.state.matrix));
  // }
  //Disconnects DB from leaking while not in use
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
  

  //function for addPmsForm Component passed down
  addPms = (pms) => {
    //Copy of existing pmses state
    const allPms = {...this.state.allPms};
    //give each pms a unquie id key
    allPms[`pms${Date.now()}`] = pms;
    //set up new pms to state
    this.setState({allPms});
  };

  updatePms = (key, updatedPms) => {
    const allPms = {...this.state.allPms};
    allPms[key] = updatedPms;
    this.setState({allPms})
  }

  loadSamplePMS = () => {
    this.setState({allPms: samplePms});
  };

  render(){
    return (
      <Fragment>
        <Header tagline="Your EMR Search Site"/>
        <div className="catch-of-the-day">
          <div className="menu">         
            <ul className="fishes">
              <li className="flexbox header">
                <p>PMS</p>
                <p>Sales Rep Action Item</p>
                <p>Type</p>
                <p>Integration Type</p>                
                <p>Integration Method</p>
              </li>
              {/*Object.keys loops over our object to create an array */}
              {Object.keys(this.state.allPms).map(key => <Pms key={key} details={this.state.allPms[key]} />)}
            </ul>
            <Inventory 
              addPms={this.addPms}
              loadSamplePMS={this.loadSamplePMS}
              allPms={this.state.allPms}
              updatePms={this.updatePms}
            />
          </div>
          <Matrix />
          
        </div>
        
      </Fragment>
    )
  }
}

export default App;