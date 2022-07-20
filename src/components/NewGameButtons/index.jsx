import Button from 'react-bootstrap/Button';

import JoinRoomModal from '../JoinRoomModal';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { matchActions, userActions } from '../../reducers';

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
  }

  return (
    <>
      <h3 className="d-flex justify-content-center">{`Hello, ${username}`}</h3>
      <div className="d-flex justify-content-center">
        <Button className="w-25 m-2" onClick={startMatch}>
          Host Game
        </Button>
        <br />
        <Button className="w-25 m-2" onClick={handleJoinRoomModal}>
          Join Game
        </Button>
        <JoinRoomModal />
        <br />
        <br />
        <Button className="w-25 m-2" onClick={emptyUsername}>
          Change Username
        </Button>
      </div>
    </>
  );
}
