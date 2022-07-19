import { Answer, Question, Timer, MatchResults } from '..';
import { useSelector } from 'react-redux';

export default function OngoingMatch() {
  const questions = useSelector((state) => state.match.questionsArray);
  const qIndex = useSelector((state) => state.match.currentRoundNum);
  const showResults = useSelector((state) => state.match.showResults);

  return (
    <>
      <h1>This is the Ongoing Match</h1>
      <Question question={questions[qIndex].question} />
      <div className='answers'>
      {questions[qIndex].answers.map((item, index) => (
        <Answer
          key={index}
          option={index}
          isCorrect={item.isCorrect}
          answer={item.answer}
        />
      ))}
      </div>
      <Timer done="30" />
      {showResults && <MatchResults />}
    </>
  );
}
