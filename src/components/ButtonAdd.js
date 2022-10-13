import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const ButtonAdd = () => {
    return (
        <Row>
            <Col>
                <Link to="/add-user">
                    <Button variant="primary">Add User</Button>
                </Link>
            </Col>
        </Row>
    );
};

export default ButtonAdd;