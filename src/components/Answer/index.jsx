import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions, matchActions } from '../../reducers';

import '../OngoingMatch/quiz.css';

export default function Answers(props) {
  const dispatch = useDispatch();
  const [displaySelected, setDisplaySelected] = useState('');

  const timeout = useSelector((state) => state.match.timeout);
  const currentRoundNum = useSelector((state) => state.match.currentRoundNum);
  const selectedAnswer = useSelector((state) => state.user.selectedAnswer);

  const truthClass = props.isCorrect ? 'correct-answer' : 'wrong-answer';

  useEffect(() => {
    setDisplaySelected('');
  }, [currentRoundNum]);

  const options = ['A', 'B', 'C', 'D'];

  const onAnswerSelection = () => {
    dispatch(userActions.selectedAnswer(options[props.option]));
    props.isCorrect && dispatch(userActions.increaseScore());
    setDisplaySelected('selected-answer');
  };

  return (
    <>
      <div
        onClick={onAnswerSelection}
        className={`answer ${displaySelected} ${timeout && truthClass} ${
          (selectedAnswer || timeout) && 'disabled-answer'
        }`}
      >
      
        <h3 className="answer-letter">{options[props.option]}</h3>
        <h2 dangerouslySetInnerHTML={{ __html: props.answer }}></h2>
        <div class="avatar">AvatarDiv</div>
        
      </div>
    </>
  );
}
