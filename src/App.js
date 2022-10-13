import React from "react";
import { Container } from 'react-bootstrap';
import { Route, Routes } from "react-router-dom";
import FormAddUser from "./feature/form-add/FormAddUser";
import FormEditUser from "./feature/form-edit/FormEditUser";
import ListUser from "./feature/list-user/ListUser";

function App() {
  return (
    <Container className="my-3" fluid="md">
      <Routes>
        <Route path="/" element={<ListUser />} />
        <Route path="/add-user" element={<FormAddUser />} />
        <Route path="/edit-user/:id" element={<FormEditUser />} />
      </Routes>
    </Container>
  );
}

export default App;
