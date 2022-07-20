import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { matchActions } from '../../reducers';
import Button from 'react-bootstrap/Button';

export default function MatchResults() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector((state) => state.user.username);
  const score = useSelector((state) => state.user.currentScore);

  const backToMainButton = () => {
    navigate('/');
    dispatch(matchActions.resetMatch());
  };

  return (
    <>
      <h1>Scores</h1>
      <ol>
        <li>{`${username}:  ${score}`}</li>
      </ol>

      <Button onClick={backToMainButton}>Go back</Button>
    </>
  );
}
