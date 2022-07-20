import { Answer, Question, Timer } from '..';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
// import { matchActions, userActions } from '../../reducers';

export default function OngoingMatch() {
  const questions = useSelector((state) => state.match.questionsArray);
  const qIndex = useSelector((state) => state.match.currentRoundNum);
  // const gameStart = useSelector((state) => state.match.gameStart);
  const showAnswers = useSelector((state) => state.match.showAnswers);
  const timeout = useSelector((state) => state.match.timeout);
  // const showResults = useSelector((state) => state.match.showResults);

  // const dispatch = useDispatch();

  const [timerDigit, setTimerDigit] = useState(0);
  

  // useEffect(() => {
  //   setTimerDigit(3);
  //   setTimeout(() => {
  //     dispatch(matchActions.revealAnswers());
  //     clearInterval(questionInterval);

  //     setTimerDigit(5);
  //     setTimeout(() => {
  //       dispatch(matchActions.declareTimeout());
  //       clearInterval(answerInterval);

  //       setTimerDigit(5);

  //       setTimeout(() => {
  //         dispatch(matchActions.nextRound());
  //         dispatch(userActions.selectedAnswer(''));
  //         dispatch(matchActions.clearTimeout());
  //         dispatch(matchActions.hideAnswers());
  //         clearInterval(timesUpInterval);

  //         let timesUpInterval = setInterval(() => {
  //           setTimerDigit((progressBar) => progressBar - 1);
  //         }, 1000);
  //       }, 5000);
  //     }, 10000);

  //     let answerInterval = setInterval(() => {
  //       setTimerDigit((timerDigit) => timerDigit - 1);
  //     }, 1000);
  //   }, 5000);

  //   let questionInterval = setInterval(() => {
  //     setTimerDigit((timerDigit) => timerDigit - 1);
  //   }, 1000);
  // }, [gameStart, qIndex]);

  return (
    <>
      <h1>This is the Ongoing Match</h1>
      <Question question={questions[qIndex].question} />
      {!showAnswers && <h2>{`The answers will appear in ${timerDigit}s`}</h2>}
      <div className="answers">
        {showAnswers &&
          questions[qIndex].answers.map((item, index) => (
            <Answer
              key={index}
              option={index}
              isCorrect={item.isCorrect}
              answer={item.answer}
            />
          ))}
      </div>
      {showAnswers && !timeout && (
        <>
          {' '}
          <Timer remaining={timerDigit} done="100" />{' '}
        </>
      )}
      {showAnswers && timeout && <h2>Time's Up!</h2>}
    </>
  );
}
