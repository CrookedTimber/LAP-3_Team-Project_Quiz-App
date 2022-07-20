import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../reducers';

import '../OngoingMatch/quiz.css';

export default function Answers(props) {
  const dispatch = useDispatch();
  const [displaySelected, setDisplaySelected] = useState('');

  const timeout = useSelector((state) => state.match.timeout);
  const currentRoundNum = useSelector((state) => state.match.currentRoundNum);
  const selectedAnswer = useSelector((state) => state.user.selectedAnswer);
  const roundAnswers = useSelector((state) => state.match.roundAnswers);

  const truthClass = props.isCorrect ? 'correct-answer' : 'wrong-answer';

  useEffect(() => {
    setDisplaySelected('');
  }, [currentRoundNum]);

  const options = ['A', 'B', 'C', 'D'];

  const onAnswerSelection = () => {
    dispatch(userActions.selectedAnswer(props.id));

    props.isCorrect && dispatch(userActions.increaseScore());
    setDisplaySelected('selected-answer');
  };

  return (
    <>
      <div
        id={props.id}
        onClick={onAnswerSelection}
        className={`answer ${displaySelected} ${timeout && truthClass} ${
          (selectedAnswer || timeout) && 'disabled-answer'
        }`}
      >
        <h3 className="answer-letter">{options[props.option]}</h3>
        <h2 dangerouslySetInnerHTML={{ __html: props.answer }}></h2>
        {timeout &&
          roundAnswers[props.id].length > 0 &&
          roundAnswers[props.id].map((item, index) => (
            <div key={`av${index}`} className={`avatar player${item}`}></div>
          ))}
      </div>
    </>
  );
}
