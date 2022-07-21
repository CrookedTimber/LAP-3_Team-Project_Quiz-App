import { Button, Container } from 'react-bootstrap';
import JoinRoomModal from '../JoinRoomModal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { matchActions, userActions } from '../../reducers';

import "./NewGameButtons.css";

export default function NewGameButtons() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector((state) => state.user.username);

  function emptyUsername() {
    localStorage.removeItem('username');
    dispatch(userActions.resetUser());
  }

  const handleJoinRoomModal = () => {
    dispatch(matchActions.toggleShowJoinRoomModal());
  };

  function startMatch() {
    navigate('/match');
    dispatch(userActions.setHost());
    dispatch(matchActions.resetMatch());
    dispatch(userActions.resetUserMatchData());
  }

  return (
    <>
    <Container className="dash-container">
    <h3 className="d-flex justify-content-center welcome-user">
      {`Hello, ${username}`}</h3>
      
      <div className="d-flex justify-content-center">
        
        <Button className="btn w-25 m-2 shadow" onClick={startMatch}>
          Host a Game
        </Button>
        <br />
        <Button className="btn w-25 m-2 shadow" onClick={handleJoinRoomModal}>
          Join a Game
        </Button>
        <JoinRoomModal />
        <br />
        <br />
        <Button className="btn w-25 m-2 shadow" onClick={emptyUsername}>
          Change Username
        </Button>
      </div>
      </Container>
    </>
  );
}
