import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

const FormEditUser = () => {
    return (
        <Container fluid="md">
            <Card border="primary">
                <Card.Header as="h5">Edit User</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Text:</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default FormEditUser;