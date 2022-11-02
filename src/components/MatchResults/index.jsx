import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { matchActions } from '../../reducers';
import { Button, Container } from 'react-bootstrap';
import { useEffect } from 'react';

import './MatchResults.css';

export default function MatchResults() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const results = useSelector((state) => state.match.results);

  const showResults = useSelector((state) => state.match.showResults);

  useEffect(() => {
    if (showResults) {
      let newResults = [...results].sort(
        (a, b) => parseFloat(b.score) - parseFloat(a.score)
      );
      dispatch(matchActions.setResults(newResults));
    }
  }, [showResults]);

  const backToMainButton = () => {
    navigate('/');
    dispatch(matchActions.resetMatch());
  };

  return (
    <>
      <Container className="results-container">
        <h1 className="results-title">Scores</h1>
        <ol role="list">
          {results.map((item, index) => (
            <li key={`result${index}`}>{`${item.username}:  ${item.score}`}</li>
          ))}
        </ol>

        <Button className="back-btn" onClick={backToMainButton}>
          Go back
        </Button>
      </Container>
    </>
  );
}
