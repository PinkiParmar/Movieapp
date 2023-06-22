import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import ReactDOM from "react-dom";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Logout.css";

export default function Logout() {
    const navigate = useNavigate();
    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/', { replace: true });
    // handleShow(false);
  }
  return (
    <div className="logout">
      <Button variant="primary" onClick={handleShow}>
        Log out
      </Button>
      <Modal show={show} onHide={handleClose} className="logout_modal">
        <Modal.Header closeButton>
          <Modal.Title>Log out</Modal.Title>
        </Modal.Header>
        <Modal.Body>are you sure, you want to exit!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={logout}>
            Log out 
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

const rootElement = document.getElementById("root");
