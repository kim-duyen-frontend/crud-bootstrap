import React, { useState, useContext } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { MdOutlineEditCalendar, MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import ButtonAdd from "../../components/ButtonAdd";
import ModalDelete from '../../components/ModalDelete';
import { GlobalContext } from "../../context/GlobalState";
import "./listuser.scss";

const ListUser = () => {
    const [showModalDelete, setShowModalDelete] = useState(false);
    const { users } = useContext(GlobalContext);
    const [dataUser, setDataUser] = useState({})

    const handleClose = () => setShowModalDelete(false);
    const handleShow = (user) => {
        setShowModalDelete(true);
        // console.log("data: ", user);
        setDataUser(user);
    }
    
    return (
        <>
            <ButtonAdd />
            <Row className="my-3 gy-3">
                {users.map((user) => (
                    <Col key={user.id} md={6} lg={4}>
                        <div className="box">
                            <div className="text-wrap text-capitalize fw-bold">{user.name}</div>
                            <div className="actions">
                                <Link to={`edit-user/${user.id}`}>
                                    <Button
                                        variant="warning"
                                        size="sm">
                                        <MdOutlineEditCalendar size={20} />
                                    </Button>
                                </Link>
                                <Button className="mx-3" variant="danger" size="sm"><MdOutlineDeleteOutline size={20} onClick={() => handleShow(user)} /></Button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
            <ModalDelete show={showModalDelete} handleClose={handleClose} dataUser={dataUser} />
        </>
    );
};

export default ListUser;