import { Button, Container } from 'react-bootstrap';
import UserProfileCard from '../../components/UserProfileCard';
import JoinRoomModal from '../../components/JoinRoomModal';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { matchActions, userActions } from '../../reducers';

export default function NewGameButtons() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const username = useSelector((state) => state.user.username);

  function emptyUsername() {
    localStorage.removeItem('username');
    dispatch(userActions.resetUser());
    navigate("/");
  }

  const handleJoinRoomModal = () => {
    dispatch(matchActions.toggleShowJoinRoomModal());
  };

  function startMatch() {
    navigate('/match');
    dispatch(userActions.setHost());
  }

  return (
    <>
    <Container className="dash-container">
        <UserProfileCard />
      
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
