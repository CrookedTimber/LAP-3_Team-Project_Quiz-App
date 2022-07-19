import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { matchActions, userActions } from '../../reducers';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function JoinRoomModal() {
  const showJoinRoom = useSelector((state) => state.match.showJoinRoom);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => dispatch(matchActions.toggleShowJoinRoomModal());
  const test = useSelector((state) => state.user.requestedRoom);

  const handleJoinRoom = (e) => {
    e.preventDefault();
    dispatch(userActions.setRequestedRoom(e.target['room-number'].value));
    navigate('/match');
  };

  return (
    <>
      <Modal
        show={showJoinRoom}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Join a Game</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleJoinRoom}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Room Number</Form.Label>
              <Form.Control type="number" name="room-number" placeholder="0000" autoFocus />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="primary">
              Enter Room
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
