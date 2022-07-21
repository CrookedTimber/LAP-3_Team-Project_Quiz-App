import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { matchActions, userActions } from '../../reducers';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './JoinRoomModal.css';

export default function JoinRoomModal() {
  const showJoinRoom = useSelector((state) => state.match.showJoinRoomModal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => dispatch(matchActions.toggleShowJoinRoomModal());
  const test = useSelector((state) => state.user.requestedRoom);

  const handleJoinRoom = (e) => {
    e.preventDefault();
    dispatch(userActions.setRequestedRoom(e.target['room-number'].value));
    navigate('/match');
    handleClose();
  };

  return (
    <>
      <Modal
        className="modal"
        show={showJoinRoom}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title className="modal-title">Join a Game</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleJoinRoom}>
          <Modal.Body className="modal-body">
            <Form.Group className="mb-3">
              <Form.Label className="modal-label">Room Number</Form.Label>
              <Form.Control
                className="modal-input"
                type="number"
                name="room-number"
                placeholder="0000"
                autoFocus
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <Button className="modal-btn" type="submit" variant="primary">
              Enter Room
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
