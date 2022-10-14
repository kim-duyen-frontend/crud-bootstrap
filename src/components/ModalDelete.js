import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { GlobalContext } from "../context/GlobalState";

const ModalDelete = ({ show, handleClose, dataUser }) => {
    const { deleteUser } = useContext(GlobalContext);
    
    const handleDeleteItem = () => {
        // console.log("check data: ", dataUser);
        deleteUser(dataUser.id);
        handleClose();
    }

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
                <Button variant="primary" onClick={handleDeleteItem}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalDelete;