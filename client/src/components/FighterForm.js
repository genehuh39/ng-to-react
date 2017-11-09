import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const FighterForm = (props) => {
    return (
        <div className="static-modal">
            <Modal show={props.show}>
                <Modal.Header>
                    <Modal.Title>Fighter Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Form goes here
                </Modal.Body>
                <Modal.Footer>
                    <Button >Close</Button>
                    <Button bsStyle="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default FighterForm;