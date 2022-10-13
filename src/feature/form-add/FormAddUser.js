import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
const FormAddUser = () => {
    return (
        <Container fluid="md">
            <Card border="primary">
                <Card.Header as="h5">Add User</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Text:</Form.Label>
                            <Form.Control type="text" placeholder="Enter text..." />
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