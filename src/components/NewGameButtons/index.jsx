import { Button, Container } from 'react-bootstrap';
import JoinRoomModal from '../JoinRoomModal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { matchActions, userActions } from '../../reducers';

import './NewGameButtons.css';

export default function NewGameButtons() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector((state) => state.user.username);

  function emptyUsername() {
    dispatch(matchActions.resetMatch())
    dispatch(userActions.resetUser());
    localStorage.removeItem('username');
    
  }

  const handleJoinRoomModal = () => {
    dispatch(matchActions.resetMatch());

    dispatch(userActions.resetUserMatchData());
    dispatch(matchActions.toggleShowJoinRoomModal());
  };

  function startMatch() {
    navigate('/match');
    dispatch(matchActions.resetMatch());
    dispatch(userActions.resetUserMatchData());
    dispatch(userActions.setHost());
  }

  return (
    <>
      <Container className="dash-container">
        <h3 className="d-flex justify-content-center welcome-user">
          {`Hello, ${username}!`}
        </h3>

        <div className="d-flex justify-content-center btn-container">
          <Button className="btn shadow" onClick={startMatch}>
            Host a Game
          </Button>
          <br />
          <Button className="btn shadow" onClick={handleJoinRoomModal}>
            Join a Game
          </Button>
          <JoinRoomModal />
          <br />
          <Button className="btn shadow" onClick={emptyUsername}>
            Change Username
          </Button>
        </div>
      </Container>
    </>
  );
}
