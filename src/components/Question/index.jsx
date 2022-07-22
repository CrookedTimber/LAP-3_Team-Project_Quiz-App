import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { matchActions, userActions } from '../../reducers';
import { Button, Container } from 'react-bootstrap';
import "./Question.css";

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
    qIndex === questions.length - 1 &&  dispatch(matchActions.setMatchEnd())
  };

  const showResults = () => {
    dispatch(matchActions.setShowResults());
  };

  return (
    <>
    <Container className="question-container shadow">
    <div className="d-flex justify-content-center dev-btns-banner">
      {/* {qIndex > 0 && (
        <Button className="dev-btns shadow" onClick={previousQuestion}>Previous Question</Button>
      )}
      <Button className="dev-btns shadow" onClick={backToMainButton}>Go back</Button>
      {qIndex < questions.length - 1 && (
        <Button className="dev-btns shadow" onClick={nextQuestion}>Next Question</Button>
      )}
      {qIndex === questions.length - 1 && (
        <Button className="dev-btns shadow" onClick={showResults}>See results</Button>
      )} */}
      </div>
      <h3 className="questionOfNum">{`Question ${qIndex + 1} of ${questions.length}`}</h3>
      <div className="question-banner">
        <h1 className="question shadow"
          key={`${props.id}h`}
          dangerouslySetInnerHTML={{ __html: props.question }}
        ></h1>
        {/* <Button className="dev-btns shadow" onClick={setTimeout}>Timeout</Button> */}
      </div>
      </Container>
    </>
  );
}
