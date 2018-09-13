import React, { Component } from "react";
import { formatPrice } from '../helpers';

class Fish extends Component {
    handleClick = () => {
        this.props.addToOrder(this.props.index);
    }
    render(){
        const { name, image, price, desc, status } = this.props.details;
        const isAvailable = status === 'available';

        return(
            <li className="menu-fish">
               <img src={image} alt={name} />
               <h4 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h4>
                <p>{desc}</p>
                <button onClick={this.handleClick} disabled={!isAvailable}>{isAvailable ? 'Add to Order' : 'Sold Out!'}</button>
            </li>
        );
    }
}

export default Fish;