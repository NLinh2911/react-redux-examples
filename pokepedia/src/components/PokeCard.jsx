import React from 'react';
import { serviceConstants } from '../_constants';
import '../css/PokeCard.css';

export class PokeCard extends React.Component {
    constructor(props) {
        super(props)
    }
    // state = {  }
    render() {
        return (
            <article className="PokeCard">
                <h3>{this.props.name}</h3>
                <img src={serviceConstants.POKEMON_IMAGE + this.props.name+'.jpg'} alt={this.props.name} />
                <a href="">More Details</a>
            </article>
        );
    }
}

// export default PokeCard;
