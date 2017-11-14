import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class FighterForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="static-modal">
                <Modal show={this.props.show}>
                    <Modal.Header>
                        <Modal.Title>Fighter Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" value="" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" value="" className="form-control" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.hide}>Close</Button>
                        <Button bsStyle="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

};

export default FighterForm;