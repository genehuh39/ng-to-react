import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const FighterForm = () => {
    return (
        <div className="static-modal">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Fighter Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Form goes here
                </Modal.Body>
                <Modal.Footer>
                    <Button>Close</Button>
                    <Button bsStyle="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
};

export default FighterForm;