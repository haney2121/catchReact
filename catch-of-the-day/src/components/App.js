import React, { Component, Fragment } from "react";
import Order from "./Order";
import Header from "./Header";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
// import base from "../base";

class App extends Component {
    state = {
        fishes: {},
        order: {}
    }
    componentDidMount(){
        const { params } = this.props.match;
        const localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef){
            this.setState({order: JSON.parse(localStorageRef)})
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentDidUpdate(){
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }
    
    addFish = (fish) => {
        const fishes = {...this.state.fishes};
        fishes[`fish${Date.now()}`] = fish;
        this.setState({fishes})
    };

    updateFish = (key, updatedFish) => {
        const fishes = {...this.state.fishes};
        fishes[key] = updatedFish;
        this.setState({fishes});
    }

    deleteFish = (key) => {
        //1. copy of state
        const fishes = {...this.state.fishes};
        //2. update state with deletion
        fishes[key] = null;
        //3. update state
        this.setState({ fishes });
    }

    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes});
    };

    addToOrder = (key) => {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({order});
    };

    deleteOrder = (key) => {
        const order = {...this.state.order};
        delete order[key];
        this.setState({order});
    }

    render(){
        return (
            <Fragment>
                <div className="catch-of-the-day">
                    <div className="menu">
                        <Header tagline="Fresh Seafood Market"/>
                        <ul className="fishes">
                            {Object.keys(this.state.fishes).map(key => <Fish index={key} details={this.state.fishes[key]} 
                            // key={key} addToOrder={this.addToOrder} 
                            />)}
                        </ul>                        
                    </div>
                    <Order 
                    deleteOrder={this.deleteOrder} fishes={this.state.fishes} order={this.state.order}
                    />
                    <Inventory 
                    deleteFish={this.deleteFish} updateFish={this.updateFish} fishes={this.state.fishes} 
                    loadSampleFishes={this.loadSampleFishes} addFish={this.addFish}/>
                </div>
            </Fragment>
        )
    }
}

export default App;