import React, { useState, useContext } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

const FormAddUser = () => {
    const [name, setName] = useState("");
    const { createUser } = useContext(GlobalContext);
    let navigate = useNavigate();

    const handleAddUser = () => {
        createUser({ id: uuidv4(), name });
        navigate("/")
    }
    return (
        <Container fluid="md">
            <Card border="primary">
                <Card.Header as="h5">Add User</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleAddUser}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Text:</Form.Label>
                            <Form.Control type="text" placeholder="Enter text..." value={name} onChange={(e) => setName(e.target.value)} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default FormAddUser;