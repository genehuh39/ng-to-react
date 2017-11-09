import React, { Component } from 'react';
import FighterForm from './FighterForm';

class ItemGridAddButton extends Component {
    constructor() {
        super();
        this.state = { showModal: false };
    }
    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={() => this.setState({ showModal: true })}>
                    add new fighter
                </button>
                <FighterForm show={this.state.showModal} hide={() => this.setState({ showModal: false })}  />
            </div>
        );
    }
};

export default ItemGridAddButton;