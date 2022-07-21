import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { matchActions } from '../../reducers';
import { Button, Container } from 'react-bootstrap';

import "./MatchResults.css";

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
    <Container className="results-container">
      <h1 className="results-title">Scores</h1>
      <ol>
        <li>{`${username}:  ${score}`}</li>
      </ol>

      <Button className="back-btn" onClick={backToMainButton}>Go back</Button>
    </Container>
    </>
  );
}
