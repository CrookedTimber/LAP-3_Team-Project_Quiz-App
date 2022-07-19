import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { matchActions } from '../../reducers';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

export default function JoinRoomModal() {
  const showJoinRoom = useSelector((state) => state.match.showJoinRoom);
  const dispatch = useDispatch();
  const [roomInput, setRoomInput] = useState('')

  const handleClose = () => dispatch(matchActions.toggleShowJoinRoomModal());


  function updateRoomInput(e) {
    setRoomInput(e.target.value);
  }
  const handleJoinRoom = (e) => {
    e.preventDefault();
    console.log(roomInput)
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
              <Form.Control onChange={updateRoomInput} type="number" placeholder="0000" autoFocus />
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
