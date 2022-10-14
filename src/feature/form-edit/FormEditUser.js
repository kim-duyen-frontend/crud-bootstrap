import React, { useEffect, useState, useContext } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from "../../context/GlobalState";

const FormEditUser = () => {
    const [username, setUserName] = useState({
        name: ""
    });
    const { users } = useContext(GlobalContext);

    let navigate = useNavigate();
    let params = useParams();

    // console.log("check data url: ", params.id);
    const handleUpdateItem = () => {
        // navigate("/");
    }
    useEffect(() => {
        let idExist = users.find((dataUsers) => dataUsers.id === params.id);
        if (idExist) {
            setUserName({ id: idExist.id, name: idExist.name })
        }
    }, [params.id, users])
    return (
        <Container fluid="md">
            <Card border="primary">
                <Card.Header as="h5">Edit User</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleUpdateItem}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Text:</Form.Label>
                            <Form.Control type="text" name="name" value={username.name} onChange={(e) => setUserName({ ...username, [e.target.name]: e.target.value })} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                        <Button variant="primary" className="mx-3" onClick={() => navigate("/")}>
                            Cancel
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default FormEditUser;