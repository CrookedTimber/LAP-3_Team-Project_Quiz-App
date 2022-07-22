import { Answer, Question, Timer } from '..';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { matchActions, userActions } from '../../reducers';
import { Container } from 'react-bootstrap';

export default function OngoingMatch({ socket, roomNum }) {
  const questions = useSelector((state) => state.match.questionsArray);
  const qIndex = useSelector((state) => state.match.currentRoundNum);
  const showAnswers = useSelector((state) => state.match.showAnswers);
  const timeout = useSelector((state) => state.match.timeout);

  const dispatch = useDispatch();

  const [timerDigit, setTimerDigit] = useState(0);

  useEffect(() => {
    setTimerDigit(4);

    let showQuestionInterval = setInterval(() => {
      setTimerDigit((timerDigit) => timerDigit - 1);
    }, 1000);

    let showQuestionTimeout = setTimeout(() => {
      clearInterval(showQuestionInterval);
      dispatch(matchActions.revealAnswers());

      setTimerDigit(8);

      let showAnswersInterval = setInterval(() => {
        setTimerDigit((timerDigit) => timerDigit - 1);
      }, 1000);

      let showAnswersTimeout = setTimeout(() => {
        clearInterval(showAnswersInterval);
        dispatch(matchActions.declareTimeout());
        qIndex === questions.length - 1 && dispatch(matchActions.setMatchEnd())

        setTimerDigit(4);

        let timesUpInterval = setInterval(() => {
          setTimerDigit((timerDigit) => timerDigit - 1);
        }, 1000);

        let timesUpTimeout = setTimeout(() => {
          clearInterval(timesUpInterval);

          qIndex === questions.length - 1
            ? dispatch(matchActions.setShowResults())
            : dispatch(matchActions.nextRound()) &&
              dispatch(matchActions.setUpNextRound()) &&
              dispatch(userActions.selectedAnswer(''));
              
        }, 4000);
      }, 8000);
    }, 4000);
  }, [qIndex]);

  return (
    <>
      <Container className="ongoing-container">
        <h1 className="d-flex justify-content-center ongoing-title">
          Ongoing Match
        </h1>

        <Question question={questions[qIndex].question} />

        <div className="answers">
          {showAnswers &&
            questions[qIndex].answers.map((item, index) => (
              <Answer
                key={index}
                option={index}
                id={`answer${index}`}
                isCorrect={item.isCorrect}
                answer={item.answer}
                socket={socket}
                roomNum={roomNum}
              />
            ))}
        </div>

        <div className="d-flex justify-content-center">
          {!showAnswers && (
            <h2>{`The answers will appear in ${timerDigit}s`}</h2>
          )}
          {showAnswers && !timeout && (
            <>
              <Timer remaining={timerDigit} done="100" />
              <h1>{`Time remaining: ${timerDigit}s`}</h1>
            </>
          )}
          {showAnswers && timeout && <h2>Time's Up!</h2> && (
            <h2>{`New round in ${timerDigit}s`}</h2>
          )}
        </div>
      </Container>
    </>
  );
}
