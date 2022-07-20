import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { matchActions, userActions } from '../../reducers';
import Button from 'react-bootstrap/Button';

import '../OngoingMatch/quiz.css';

export default function Question(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const questions = useSelector((state) => state.match.questionsArray);
  const qIndex = useSelector((state) => state.match.currentRoundNum);

  // DEVELOPER FEATURE
  const backToMainButton = () => {
    navigate('/');
    dispatch(matchActions.resetMatch());
  };

  // DEVELOPER FEATURE

  const nextQuestion = () => {
    dispatch(matchActions.nextRound());
    dispatch(matchActions.setUpNextRound());
    dispatch(userActions.selectedAnswer(''));
  };

  // DEVELOPER FEATURE
  const previousQuestion = () => {
    dispatch(matchActions.previousRound());
    dispatch(userActions.selectedAnswer(''));
    dispatch(matchActions.clearTimeout());
  };

  const setTimeout = () => {
    dispatch(matchActions.declareTimeout());
  };

  const showResults = () => {
    dispatch(matchActions.setShowResults());
  };

  return (
    <>
    <div className="d-flex justify-content-center">
      {qIndex > 0 && (
        <Button onClick={previousQuestion}>Previous Question</Button>
      )}
      <Button onClick={backToMainButton}>Go back</Button>
      {qIndex < questions.length - 1 && (
        <Button onClick={nextQuestion}>Next Question</Button>
      )}
      {qIndex === questions.length - 1 && (
        <Button onClick={showResults}>See results</Button>
      )}
      </div>
      <h3>{`Question ${qIndex + 1} of ${questions.length}`}</h3>
      <div className="question">
        <h1
          key={`${props.id}h`}
          dangerouslySetInnerHTML={{ __html: props.question }}
        ></h1>
        <Button onClick={setTimeout}>Timeout</Button>
      </div>
    </>
  );
}
