import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Logout.css';
export default function Logout(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
    <div className="logout">
      <Button variant="primary" onClick={handleShow}>
      Log Out
    </Button>

    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Log Out</Modal.Title>
      </Modal.Header>
      <Modal.Body><span className='text'>Are you sure you want to log-off?</span></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Log Out
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
    )
}
