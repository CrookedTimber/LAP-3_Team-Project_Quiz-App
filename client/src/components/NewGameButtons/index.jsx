import Button from 'react-bootstrap/Button';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userActions } from '../../reducers';

export default function NewGameButtons() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector((state) => state.user.username);

  function emptyUsername() {
    localStorage.removeItem('username');
    dispatch(userActions.resetUser());
  }

  const handleJoinGame = () => {
    dispatch(userActions.joinGame());
  };

  function startMatch() {
    navigate('/match');
  }

  return (
    <>
      <h3 className="d-flex justify-content-center">{`Hello, ${username}`}</h3>
      <div className="d-flex justify-content-center">
        <Button className="w-25 m-2" onClick={startMatch}>
          New Game
        </Button>
        <br />
        <Button className="w-25 m-2" onClick={handleJoinGame}>
          Join Game
        </Button>
        <br />
        <br />
        <Button className="w-25 m-2" onClick={emptyUsername}>
          Change Username
        </Button>
      </div>
    </>
  );
}
