import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { MdOutlineEditCalendar, MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ButtonAdd from "../../components/ButtonAdd";
import ModalDelete from '../../components/ModalDelete';

import "./listuser.scss";

const initialState = [
    {
        id: uuidv4(),
        name: "Kiến Vinh"
    },
    {
        id: uuidv4(),
        name: "Thu Hiền"
    },
    {
        id: uuidv4(),
        name: "Kim Duyên"
    }
];
const ListUser = () => {
    const [showModalDelete, setShowModalDelete] = useState(false);

    const handleClose = () => setShowModalDelete(false);
    const handleShow = () => setShowModalDelete(true);
    return (
        <>
            <ButtonAdd />
            <Row className="my-3 gy-3">
                {initialState.map((user) => (
                    <Col key={user.id} md={6} lg={4}>
                        <div className="box">
                            <div className="text-wrap text-capitalize fw-bold">{user.name}</div>
                            <div className="actions">
                                <Link to={`edit-user/${user.id}`}>
                                    <Button variant="warning" size="sm"><MdOutlineEditCalendar size={20} /></Button>
                                </Link>
                                <Button className="mx-3" variant="danger" size="sm"><MdOutlineDeleteOutline size={20} onClick={handleShow} /></Button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
            <ModalDelete show={showModalDelete} handleClose={handleClose} />
        </>
    );
};

export default ListUser;