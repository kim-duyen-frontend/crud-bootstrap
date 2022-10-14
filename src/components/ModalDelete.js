import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalDelete = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Delete User</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to delete ?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalDelete;